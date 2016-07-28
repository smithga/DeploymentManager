System.register(['angular2/core', 'angular2/router', '../list/agents.list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, agents_list_component_1;
    var AgentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (agents_list_component_1_1) {
                agents_list_component_1 = agents_list_component_1_1;
            }],
        execute: function() {
            AgentsComponent = (function () {
                function AgentsComponent(_router) {
                    this._router = _router;
                    this.pageTitle = "Artists";
                }
                AgentsComponent.prototype.onBack = function () {
                    this._router.navigate(["Home"]);
                };
                AgentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/agents/index/agents.component.html',
                        directives: [agents_list_component_1.AgentsListComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AgentsComponent);
                return AgentsComponent;
            }());
            exports_1("AgentsComponent", AgentsComponent);
        }
    }
});
//# sourceMappingURL=agents.component.js.map