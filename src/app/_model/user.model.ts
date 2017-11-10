export class User {

    constructor(username: string, password: string);

    constructor(
        public username,
        public password,
        public id?: number,
        public name?: string) {
    }
}
