import { HttpException } from "./RootException";

export class NewException extends HttpException{
    constructor(message,errorCode,errors,statusCode){
        super(message,errorCode,statusCode,errors);
    }
}