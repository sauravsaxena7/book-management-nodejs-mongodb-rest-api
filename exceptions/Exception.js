import { HttpException } from "./RootException.js";

export class NewException extends HttpException{
    constructor(message,errorCode,errors,statusCode){
        super(message,errorCode,statusCode,errors);
    }
}