import { Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    template: "<div>{{pageTitle()}}</div>"
})
export class AppComponent {
    pageTitle(): string {
        return "Starter files for Angular2: Getting Started.";
    }
}