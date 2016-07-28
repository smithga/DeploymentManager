System.register(['angular2/core', '../services/agents.service'], function(exports_1, context_1) {
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
    var core_1, agents_service_1;
    var AgentsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (agents_service_1_1) {
                agents_service_1 = agents_service_1_1;
            }],
        execute: function() {
            AgentsListComponent = (function () {
                function AgentsListComponent(_agentsService) {
                    this._agentsService = _agentsService;
                    this.agentClicked = new core_1.EventEmitter();
                }
                AgentsListComponent.prototype.ngOnInit = function () {
                    this.getAgents();
                };
                AgentsListComponent.prototype.getAgents = function () {
                    var _this = this;
                    console.log('getAgents()');
                    this._agentsService.getAgents()
                        .subscribe(function (agents) { return _this.agents = agents; }, function (error) { return _this.errorMessage = error; });
                };
                AgentsListComponent.prototype.onAgentClicked = function (agent) {
                    this.agentClicked.emit(agent);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AgentsListComponent.prototype, "filter", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], AgentsListComponent.prototype, "agentClicked", void 0);
                AgentsListComponent = __decorate([
                    core_1.Component({
                        selector: 'agents-list',
                        templateUrl: 'app/agents/list/agents.list.component.html'
                    }), 
                    __metadata('design:paramtypes', [agents_service_1.AgentsService])
                ], AgentsListComponent);
                return AgentsListComponent;
            }());
            exports_1("AgentsListComponent", AgentsListComponent);
        }
    }
});
//# sourceMappingURL=agents.list.component.js.map