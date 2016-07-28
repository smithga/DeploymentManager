import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { IPackage, Package } from '../models/package';
import { PackagesService } from '../services/packages.service';

declare var $: any;

@Component({
    templateUrl: 'app/packages/create/packages.create.component.html'
})
export class PackagesCreateComponent {
    public pageTitle: string = "Create Package";
    public errorMessage: string;
    package: IPackage;
    
    constructor(private _router: Router, private _packagesService: PackagesService) {
        this.package = new Package("", "", "");
    }
        
    public onBack() : void {
        this._router.navigate(["Home"]);
    }

    onSave() {
        this._packagesService.addPackage(this.package)
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