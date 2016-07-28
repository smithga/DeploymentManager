import { Component } from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx';   // Load all features
import { HTTP_PROVIDERS } from 'angular2/http';

import { HomeComponent } from './home/home.component';
//Layout Components
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { StateBreadcrumbsComponent } from './layout/state-breadcrumbs/state-breadcrumbs.component';

//App Components
import { AgentsComponent } from './agents/index/agents.component';
import { SettingsComponent } from './settings/index/settings.component';
import { PackagesComponent } from './packages/index/packages.component';
import { PackagesCreateComponent } from './packages/create/packages.create.component';
import { PackagesEditComponent } from './packages/edit/packages.edit.component';

//Services
import { AgentsService } from './agents/services/agents.service';
import { SettingsService } from './settings/services/settings.service';
import { PackagesService } from './packages/services/packages.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        FooterComponent,
        HeaderComponent,
        NavigationComponent,
        StateBreadcrumbsComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        AgentsService,
        SettingsService,
        PackagesService
    ]
})
@RouteConfig([
    { path: "/home", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/agents", name: "Agents", component: AgentsComponent },
    { path: "/settings", name: "Settings", component: SettingsComponent },
    { path: "/packages", name: "Packages", component: PackagesComponent },
    { path: "/packages/create", name: "PackagesCreate", component: PackagesCreateComponent },
    { path: "/packages/edit/:id", name: "PackagesEdit", component: PackagesEditComponent }
])
export class AppComponent {
    pageTitle(): string {
        return "Deployment Manager Server";
    }
}


