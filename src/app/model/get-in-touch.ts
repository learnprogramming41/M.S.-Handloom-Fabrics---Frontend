export class GetInTouch {
    constructor(
        public name?: string,
        public email?: string,
        public subject?: string,
        public body?: string
    ) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.body = body;
    }
}