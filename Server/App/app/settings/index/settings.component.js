System.register(['angular2/core', '../models/settings', '../services/settings.service'], function(exports_1, context_1) {
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
    var core_1, settings_1, settings_service_1;
    var SettingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (settings_1_1) {
                settings_1 = settings_1_1;
            },
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
            }],
        execute: function() {
            SettingsComponent = (function () {
                function SettingsComponent(_settingsService) {
                    this._settingsService = _settingsService;
                    this.agentClicked = new core_1.EventEmitter();
                    this.settings = new settings_1.Settings();
                }
                SettingsComponent.prototype.ngOnInit = function () {
                    this.getSettings();
                };
                SettingsComponent.prototype.getSettings = function () {
                    var _this = this;
                    console.log('getSettings()');
                    this._settingsService.getSettings()
                        .subscribe(function (settings) { return _this.settings = settings; }, function (error) { return _this.errorMessage = error; });
                };
                SettingsComponent.prototype.saveSettings = function () {
                    var _this = this;
                    console.log('saveSettings()');
                    this._settingsService.saveSettings(this.settings)
                        .subscribe(function (result) { _this.showConfirm(); }, function (error) { return _this.errorMessage = error; });
                };
                SettingsComponent.prototype.showConfirm = function () {
                    $.smallBox({
                        title: "Save Settings",
                        content: "Your settings were saved sucessfully!",
                        color: "#296191",
                        iconSmall: "fa fa-thumbs-up bounce animated",
                        timeout: 3000
                    });
                    /*
                            $.bigBox({
                                title: "Save Settings",
                                content: "Your settings were saved successfully!",
                                color: "#739E73",
                                timeout: 4000,
                                icon: "fa fa-check"
                            }, function () {
                                //$scope.closedthis();
                            });
                    */
                };
                SettingsComponent.prototype.onSave = function () {
                    this.saveSettings();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SettingsComponent.prototype, "filter", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SettingsComponent.prototype, "agentClicked", void 0);
                SettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'settings',
                        templateUrl: 'app/settings/index/settings.component.html'
                    }), 
                    __metadata('design:paramtypes', [settings_service_1.SettingsService])
                ], SettingsComponent);
                return SettingsComponent;
            }());
            exports_1("SettingsComponent", SettingsComponent);
        }
    }
});
//# sourceMappingURL=settings.component.js.map