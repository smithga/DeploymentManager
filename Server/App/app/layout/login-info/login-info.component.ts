import { Component } from 'angular2/core';

import { IUser, User } from './user';

@Component({
    selector: 'login-info',
    templateUrl: 'app/layout/login-info/login-info.component.html'
})
export class LoginInfoComponent {
    user: IUser;

    constructor() {
        this.user = new User("Administrator");
    }

}