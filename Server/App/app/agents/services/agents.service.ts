import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IAgent } from '../models/agent';

@Injectable()
export class AgentsService {
    private headers: Headers;
    private _agentsUrl = 'http://localhost:7401/api/agents';

    constructor(private _http: Http) {
	    this.headers = new Headers(); 
        this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Access-Control-Allow-Origin', '*');    
    }
    
    getAgents(): Observable<IAgent[]> {
        return this._http
            .get(this._agentsUrl, { 
                headers: this.headers
            })
            .map((response: Response) => <IAgent[]> response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAgent(id: string): Observable<IAgent> {
        return this.getAgents()
            .map((agents: IAgent[]) => agents.find(p => p.id === id));       
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}