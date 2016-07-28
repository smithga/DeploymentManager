import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { LoginInfoComponent } from '../login-info/login-info.component';

@Component({
    selector: 'sa-navigation',
    templateUrl: 'app/layout/navigation/navigation.component.html',
    directives: [ROUTER_DIRECTIVES, LoginInfoComponent]
})
export class NavigationComponent {

}