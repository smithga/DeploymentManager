import {Component,Input,Output,EventEmitter,OnInit} from 'angular2/core';

import {IAgent} from '../../agents/models/agent';
import {AgentsService} from '../services/agents.service';

@Component({
    selector: 'agents-list',
    templateUrl: 'app/agents/list/agents.list.component.html'
})
export class AgentsListComponent implements OnInit {
    public errorMessage: string;
    public agents: IAgent[];
    @Input() filter: string;
    @Output() agentClicked: EventEmitter<IAgent> = new EventEmitter<IAgent>();

    constructor(private _agentsService: AgentsService) {}

    ngOnInit(): void {
        this.getAgents();
    }

    getAgents() {
        console.log('getAgents()');
        this._agentsService.getAgents()
            .subscribe(
            agents => this.agents = agents,
            error =>  this.errorMessage = <any>error); 
    }

    public onAgentClicked(agent: IAgent) {
        this.agentClicked.emit(agent);
    }
}