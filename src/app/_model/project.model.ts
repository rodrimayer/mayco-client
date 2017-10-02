export class Project {

    constructor(name: string, description: string);

    constructor(
        public name: string,
        public description: string,
        public imageEncoded?: string,
        public imageDecoded?: string,
        public id?: number
    ) { }

}
