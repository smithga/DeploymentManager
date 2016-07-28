System.register(['angular2/core', 'angular2/router', '../services/packages.service'], function(exports_1, context_1) {
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
    var core_1, router_1, packages_service_1;
    var PackagesEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (packages_service_1_1) {
                packages_service_1 = packages_service_1_1;
            }],
        execute: function() {
            PackagesEditComponent = (function () {
                function PackagesEditComponent(_router, _routeParams, _packagesService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._packagesService = _packagesService;
                    this.pageTitle = "Edit Package";
                }
                PackagesEditComponent.prototype.ngOnInit = function () {
                    if (!this.package) {
                        var id = this._routeParams.get('id');
                        this.getPackage(id);
                    }
                };
                PackagesEditComponent.prototype.getPackage = function (id) {
                    var _this = this;
                    console.log('getPackage()' + id);
                    this._packagesService.getPackage(id)
                        .subscribe(function (result) { return _this.package = result; }, function (error) { return _this.errorMessage = error; });
                };
                PackagesEditComponent.prototype.onBack = function () {
                    this._router.navigate(["Home"]);
                };
                PackagesEditComponent.prototype.onSave = function () {
                    var _this = this;
                    this._packagesService.savePackage(this.package)
                        .subscribe(function (result) { _this.showConfirm(); }, function (error) { return _this.errorMessage = error; });
                };
                PackagesEditComponent.prototype.showConfirm = function () {
                    $.smallBox({
                        title: "Save Settings",
                        content: "Your settings were saved sucessfully!",
                        color: "#296191",
                        iconSmall: "fa fa-thumbs-up bounce animated",
                        timeout: 3000
                    });
                    this._router.navigate(["Packages"]);
                };
                PackagesEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/packages/edit/packages.edit.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, packages_service_1.PackagesService])
                ], PackagesEditComponent);
                return PackagesEditComponent;
            }());
            exports_1("PackagesEditComponent", PackagesEditComponent);
        }
    }
});
//# sourceMappingURL=packages.edit.component.js.map