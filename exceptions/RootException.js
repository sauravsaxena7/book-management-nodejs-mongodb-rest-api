//message,statuscode,error code,error

export class HttpException extends Error {
    message;
    errorCode;
    statusCode;
    errors;
  
    constructor(
      message,
      errorCode,
      statusCode,
      error
    ) {
      super(message);
      this.message = message;
      this.errorCode = errorCode;
      this.errors = error;
      this.statusCode = statusCode;
    }
  }
  
  export const ErrorCodes= {
    USER_NOT_FOUND:1001,
    USER_ALREADY_EXIST : 1002,
    INCORRECT_PASSWORD : 1003,
    UNPROCESSABLE_ENTITY :1004,
    INTERNAL_EXCEPTION : 1005,
    UNAUTHORIZED : 4001,
    NOT_FOUND:4004,
    BAD_REQUEST:4000,
  
    PRODUCT_NOT_FOUND : 5001,
  
    ORDER_NOT_FOUND : 6001,
  }
  