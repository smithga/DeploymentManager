import { Injectable } from 'angular2/core';
import { Http, Response, Headers, URLSearchParams } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IPackage } from '../models/package';

@Injectable()
export class PackagesService {
    private headers: Headers;
    private _url = 'http://localhost:7401/api/packages';

    constructor(private _http: Http) {
	    this.headers = new Headers(); 
        this.headers.append('Content-Type', 'application/json');
    }
    
    getPackages(): Observable<IPackage[]> {
        return this._http
            .get(this._url, { 
                headers: this.headers
            })
            .map((response: Response) => <IPackage[]> response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPackage(id: string): Observable<IPackage> {
        let params: URLSearchParams = new URLSearchParams();
        params.set("id", id);
        return this._http
            .get(this._url, { 
                headers: this.headers,
                search: params
            })
            .map((response: Response) => <IPackage> response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);

    }

    addPackage(pkg: IPackage): Observable<Response> {
        return this._http
            .post(this._url, JSON.stringify(pkg), {
                headers: this.headers
            })
            .map(this.checkResult)
            .catch(this.handleError); 
    }

    savePackage(pkg: IPackage): Observable<Response> {
        return this._http
            .put(this._url, JSON.stringify(pkg), {
                headers: this.headers
            })
            .map(this.checkResult)
            .catch(this.handleError); 
    }

    private checkResult(res: Response) {
        console.dir(res);
        return res; //.statusText == "Ok";
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}