import { Component } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PackagesListComponent } from '../list/packages.list.component';

@Component({
    templateUrl: 'app/packages/index/packages.component.html',
    directives: [ROUTER_DIRECTIVES, PackagesListComponent]
})
export class PackagesComponent {
    public pageTitle: string = "Packages";
    
    constructor(private _router: Router) {}
        
    public onBack() : void {
        this._router.navigate(["Home"]);
    }

    onAdd() {
        alert("new");
    }
}