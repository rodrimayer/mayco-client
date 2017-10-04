export class Mail {

    public subject: string;
    public text: string;
    public to = 'nicolasbloj@gmail.com';

    constructor(init?: Partial<Mail>
    ) {
        Object.assign(this, init);
    }
}

