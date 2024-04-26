export const errorMiddleWare=(error,req,res,next) =>{
    
    res.status(error.statusCode || 500).json({
        message:error.message,
        errorCode:error.errorCode,
        errors:error.errors
    })
    
}
    