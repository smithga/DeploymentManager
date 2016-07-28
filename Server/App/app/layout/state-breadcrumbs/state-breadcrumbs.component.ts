import { Component, OnInit, OnDestroy } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'state-breadcrumbs',
    template: '<ol class="breadcrumb"><li>{{pageName}}</li></ol>'
})
export class StateBreadcrumbsComponent implements OnInit, OnDestroy {
    pageName: string;
    _router: Router;

    constructor(public router: Router) {
        this._router = router;
        console.dir(router);
    }

    ngOnInit() {
        this._router.subscribe(e => {
            this.pageName = e;
        });
    }

    ngOnDestroy() {

    }

}