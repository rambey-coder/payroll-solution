export class AuthException extends Error{
    constructor(message) {
        super(message);
        this.name = 'Authorization Exception';
        this.statusCode = 403;
    }
}