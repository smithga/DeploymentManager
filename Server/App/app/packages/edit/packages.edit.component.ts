import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { IPackage, Package } from '../models/package';
import { PackagesService } from '../services/packages.service';

declare var $: any;

@Component({
    templateUrl: 'app/packages/edit/packages.edit.component.html'
})
export class PackagesEditComponent implements OnInit {
    public pageTitle: string = "Edit Package";
    public errorMessage: string;
    package: IPackage;
    
    constructor(private _router: Router, private _routeParams: RouteParams, private _packagesService: PackagesService) {
    }

    ngOnInit() {
        if (!this.package) {
            let id = this._routeParams.get('id');
            this.getPackage(id);
        }
    }

    getPackage(id: string) {
         console.log('getPackage()' + id);
        this._packagesService.getPackage(id)
            .subscribe(
            result => this.package = result,
            error =>  this.errorMessage = <any>error); 
    }

    public onBack() : void {
        this._router.navigate(["Home"]);
    }

    onSave() {
        this._packagesService.savePackage(this.package)
            .subscribe(
                result => { this.showConfirm(); },
                error =>  this.errorMessage = <any>error
            );         
    }

    showConfirm() {
        $.smallBox({
            title: "Save Settings",
            content: "Your settings were saved sucessfully!",
            color: "#296191",
            iconSmall: "fa fa-thumbs-up bounce animated",
            timeout: 3000
        });
        this._router.navigate(["Packages"]);
    }

}