import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ISettings } from '../models/settings';

@Injectable()
export class SettingsService {
    private headers: Headers;
    private _settingsUrl = 'http://localhost:7401/api/settings';

    constructor(private _http: Http) {
	    this.headers = new Headers(); 
        this.headers.append('Content-Type', 'application/json');
    }
    
    getSettings(): Observable<ISettings> {
        return this._http
            .get(this._settingsUrl, { 
                headers: this.headers
            })
            .map((response: Response) => <ISettings> response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveSettings(settings: ISettings): Observable<Response> {
        return this._http
            .post(this._settingsUrl, JSON.stringify(settings), {
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