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
    var PackagesListComponent;
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
            PackagesListComponent = (function () {
                function PackagesListComponent(_packagesService) {
                    this._packagesService = _packagesService;
                    this.agentClicked = new core_1.EventEmitter();
                }
                PackagesListComponent.prototype.ngOnInit = function () {
                    this.getPackages();
                };
                PackagesListComponent.prototype.getPackages = function () {
                    var _this = this;
                    console.log('getPackages()');
                    this._packagesService.getPackages()
                        .subscribe(function (packages) { return _this.packages = packages; }, function (error) { return _this.errorMessage = error; });
                };
                PackagesListComponent.prototype.onPackageClicked = function (agent) {
                    //this.agentClicked.emit(agent);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PackagesListComponent.prototype, "filter", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PackagesListComponent.prototype, "agentClicked", void 0);
                PackagesListComponent = __decorate([
                    core_1.Component({
                        selector: 'packages-list',
                        templateUrl: 'app/packages/list/packages.list.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [packages_service_1.PackagesService])
                ], PackagesListComponent);
                return PackagesListComponent;
            }());
            exports_1("PackagesListComponent", PackagesListComponent);
        }
    }
});
//# sourceMappingURL=packages.list.component.js.map