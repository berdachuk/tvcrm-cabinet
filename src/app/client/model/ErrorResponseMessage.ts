export class ErrorResponseMessage {
    developerMessage:string;
    message:string;
    type:string;
    uuid:string;

    constructor(message:string,
                type:string,
                developerMessage?:string,
                uuid?:string) {
    }
}
