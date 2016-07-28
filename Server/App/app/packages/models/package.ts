export interface IPackage {
    id: string;
    name: string;
    description: string;
}

export class Package implements IPackage {
    constructor(public id: string, public name: string, public description: string) {}
}