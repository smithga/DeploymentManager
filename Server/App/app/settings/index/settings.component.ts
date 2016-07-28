import {Component,Input,Output,EventEmitter,OnInit} from 'angular2/core';

import { ISettings, Settings } from '../models/settings';
import { SettingsService } from '../services/settings.service';

declare var $: any;

@Component({
    selector: 'settings',
    templateUrl: 'app/settings/index/settings.component.html'
})
export class SettingsComponent {
    public errorMessage: string;
    public settings: ISettings;
    @Input() filter: string;
    @Output() agentClicked: EventEmitter<ISettings> = new EventEmitter<ISettings>();

    constructor(private _settingsService: SettingsService) {
        this.settings = new Settings();
    }

    ngOnInit(): void {
        this.getSettings();
    }

    getSettings() {
        console.log('getSettings()');
        this._settingsService.getSettings()
            .subscribe(
            settings => this.settings = settings,
            error =>  this.errorMessage = <any>error); 
    }

    saveSettings() {
        console.log('saveSettings()');
        this._settingsService.saveSettings(this.settings)
            .subscribe(
                result => { this.showConfirm(); },
                error =>  this.errorMessage = <any>error
            );         
    }

    showConfirm() {
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
    }

    public onSave() {
        this.saveSettings();
    }
}