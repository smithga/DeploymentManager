import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { AgentsListComponent } from '../list/agents.list.component';

@Component({
    templateUrl: 'app/agents/index/agents.component.html',
    directives: [AgentsListComponent]
})
export class AgentsComponent {
    public pageTitle: string = "Artists";
    
    constructor(private _router: Router) {}
        
    public onBack() : void {
        this._router.navigate(["Home"]);
    }
}