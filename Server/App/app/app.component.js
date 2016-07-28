System.register(['angular2/core', 'angular2/router', 'rxjs/Rx', 'angular2/http', './home/home.component', './layout/footer/footer.component', './layout/header/header.component', './layout/navigation/navigation.component', './layout/state-breadcrumbs/state-breadcrumbs.component', './agents/index/agents.component', './settings/index/settings.component', './packages/index/packages.component', './packages/create/packages.create.component', './packages/edit/packages.edit.component', './agents/services/agents.service', './settings/services/settings.service', './packages/services/packages.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, home_component_1, footer_component_1, header_component_1, navigation_component_1, state_breadcrumbs_component_1, agents_component_1, settings_component_1, packages_component_1, packages_create_component_1, packages_edit_component_1, agents_service_1, settings_service_1, packages_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (state_breadcrumbs_component_1_1) {
                state_breadcrumbs_component_1 = state_breadcrumbs_component_1_1;
            },
            function (agents_component_1_1) {
                agents_component_1 = agents_component_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            },
            function (packages_component_1_1) {
                packages_component_1 = packages_component_1_1;
            },
            function (packages_create_component_1_1) {
                packages_create_component_1 = packages_create_component_1_1;
            },
            function (packages_edit_component_1_1) {
                packages_edit_component_1 = packages_edit_component_1_1;
            },
            function (agents_service_1_1) {
                agents_service_1 = agents_service_1_1;
            },
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
            },
            function (packages_service_1_1) {
                packages_service_1 = packages_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.pageTitle = function () {
                    return "Deployment Manager Server";
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            footer_component_1.FooterComponent,
                            header_component_1.HeaderComponent,
                            navigation_component_1.NavigationComponent,
                            state_breadcrumbs_component_1.StateBreadcrumbsComponent
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            agents_service_1.AgentsService,
                            settings_service_1.SettingsService,
                            packages_service_1.PackagesService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: "/home", name: "Home", component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: "/agents", name: "Agents", component: agents_component_1.AgentsComponent },
                        { path: "/settings", name: "Settings", component: settings_component_1.SettingsComponent },
                        { path: "/packages", name: "Packages", component: packages_component_1.PackagesComponent },
                        { path: "/packages/create", name: "PackagesCreate", component: packages_create_component_1.PackagesCreateComponent },
                        { path: "/packages/edit/:id", name: "PackagesEdit", component: packages_edit_component_1.PackagesEditComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map