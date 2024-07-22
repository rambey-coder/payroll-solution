export class BadRequestException extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundException';
        this.statusCode = 404;
    }
}

