export interface IAgent {
    id: string;
    name: string;
    port: string;
    ip: string;
}

export class Agent implements IAgent {
    constructor(public id: string, public name: string, public port: string, public ip: string) {}
}