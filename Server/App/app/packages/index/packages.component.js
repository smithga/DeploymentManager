System.register(['angular2/core', 'angular2/router', '../list/packages.list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, packages_list_component_1;
    var PackagesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (packages_list_component_1_1) {
                packages_list_component_1 = packages_list_component_1_1;
            }],
        execute: function() {
            PackagesComponent = (function () {
                function PackagesComponent(_router) {
                    this._router = _router;
                    this.pageTitle = "Packages";
                }
                PackagesComponent.prototype.onBack = function () {
                    this._router.navigate(["Home"]);
                };
                PackagesComponent.prototype.onAdd = function () {
                    alert("new");
                };
                PackagesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/packages/index/packages.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, packages_list_component_1.PackagesListComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], PackagesComponent);
                return PackagesComponent;
            }());
            exports_1("PackagesComponent", PackagesComponent);
        }
    }
});
//# sourceMappingURL=packages.component.js.map