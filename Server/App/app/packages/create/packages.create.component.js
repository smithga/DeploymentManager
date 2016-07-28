System.register(['angular2/core', 'angular2/router', '../models/package', '../services/packages.service'], function(exports_1, context_1) {
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
    var core_1, router_1, package_1, packages_service_1;
    var PackagesCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (package_1_1) {
                package_1 = package_1_1;
            },
            function (packages_service_1_1) {
                packages_service_1 = packages_service_1_1;
            }],
        execute: function() {
            PackagesCreateComponent = (function () {
                function PackagesCreateComponent(_router, _packagesService) {
                    this._router = _router;
                    this._packagesService = _packagesService;
                    this.pageTitle = "Create Package";
                    this.package = new package_1.Package("", "", "");
                }
                PackagesCreateComponent.prototype.onBack = function () {
                    this._router.navigate(["Home"]);
                };
                PackagesCreateComponent.prototype.onSave = function () {
                    var _this = this;
                    this._packagesService.addPackage(this.package)
                        .subscribe(function (result) { _this.showConfirm(); }, function (error) { return _this.errorMessage = error; });
                };
                PackagesCreateComponent.prototype.showConfirm = function () {
                    $.smallBox({
                        title: "Save Settings",
                        content: "Your settings were saved sucessfully!",
                        color: "#296191",
                        iconSmall: "fa fa-thumbs-up bounce animated",
                        timeout: 3000
                    });
                    this._router.navigate(["Packages"]);
                };
                PackagesCreateComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/packages/create/packages.create.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, packages_service_1.PackagesService])
                ], PackagesCreateComponent);
                return PackagesCreateComponent;
            }());
            exports_1("PackagesCreateComponent", PackagesCreateComponent);
        }
    }
});
//# sourceMappingURL=packages.create.component.js.map