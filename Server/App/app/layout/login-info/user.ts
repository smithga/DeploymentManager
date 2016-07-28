export interface IUser {
    username: string;
}

export class User implements IUser {
    constructor(public username: string) {}
}