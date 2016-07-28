System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var StateBreadcrumbsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StateBreadcrumbsComponent = (function () {
                function StateBreadcrumbsComponent(router) {
                    this.router = router;
                    this._router = router;
                    console.dir(router);
                }
                StateBreadcrumbsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._router.subscribe(function (e) {
                        _this.pageName = e;
                    });
                };
                StateBreadcrumbsComponent.prototype.ngOnDestroy = function () {
                };
                StateBreadcrumbsComponent = __decorate([
                    core_1.Component({
                        selector: 'state-breadcrumbs',
                        template: '<ol class="breadcrumb"><li>{{pageName}}</li></ol>'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], StateBreadcrumbsComponent);
                return StateBreadcrumbsComponent;
            }());
            exports_1("StateBreadcrumbsComponent", StateBreadcrumbsComponent);
        }
    }
});
//# sourceMappingURL=state-breadcrumbs.component.js.map