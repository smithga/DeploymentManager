System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var SettingsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            SettingsService = (function () {
                function SettingsService(_http) {
                    this._http = _http;
                    this._settingsUrl = 'http://localhost:7401/api/settings';
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                }
                SettingsService.prototype.getSettings = function () {
                    return this._http
                        .get(this._settingsUrl, {
                        headers: this.headers
                    })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                SettingsService.prototype.saveSettings = function (settings) {
                    return this._http
                        .post(this._settingsUrl, JSON.stringify(settings), {
                        headers: this.headers
                    })
                        .map(this.checkResult)
                        .catch(this.handleError);
                };
                SettingsService.prototype.checkResult = function (res) {
                    console.dir(res);
                    return res; //.statusText == "Ok";
                };
                SettingsService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                SettingsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SettingsService);
                return SettingsService;
            }());
            exports_1("SettingsService", SettingsService);
        }
    }
});
//# sourceMappingURL=settings.service.js.map