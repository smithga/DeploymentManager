import {Component,Input,Output,EventEmitter,OnInit} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {IPackage} from '../../packages/models/package';
import {PackagesService} from '../services/packages.service';

@Component({
    selector: 'packages-list',
    templateUrl: 'app/packages/list/packages.list.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class PackagesListComponent implements OnInit {
    public errorMessage: string;
    public packages: IPackage[];
    @Input() filter: string;
    @Output() agentClicked: EventEmitter<IPackage> = new EventEmitter<IPackage>();

    constructor(private _packagesService: PackagesService) {}

    ngOnInit(): void {
        this.getPackages();
    }

    getPackages() {
        console.log('getPackages()');
        this._packagesService.getPackages()
            .subscribe(
            packages => this.packages = packages,
            error =>  this.errorMessage = <any>error); 
    }

    public onPackageClicked(agent: IPackage) {
        //this.agentClicked.emit(agent);
    }
}