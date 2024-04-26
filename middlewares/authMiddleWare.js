import { NewException } from "../exceptions/Exception.js";
import { ErrorCodes } from "../exceptions/RootException.js";
import { Author } from "../models/auth.model.js";
import jwt from "jsonwebtoken"

const authMiddleWare = async (
    req,
    res,
    next
  ) => {
    // 1. extract the token from header

    console.log("lola-token",req.cookies["lola-token"])
    const token = req.cookies["lola-token"];
  
  
    // 2. if token is not present, throw an error of unauthorized
    if(!token){
      next(new NewException("Unauthorized Invalid token",ErrorCodes.UNAUTHORIZED,null,401));
    }
  
    
    try {
     
      // 3. if the token is present, verify that token and extract the payload
      const payload =  jwt.verify(token, process.env.JWT_SECRET) ;

     

      
  
      // 4. to get the user from the payload const user = await prismaClient.user.findFirst({where:{id:payload.userId}});
      const user = await Author.findById(payload._id);
      if (!user) {
          next(new NewException('Unauthorized with user not found',ErrorCodes.UNAUTHORIZED,null,401))
      }
     
  
      // 5. to attach the user to the current request obejct
      
      req.user =user;
      next();
  
  
    }catch(error){

      console.log("authmiddleware error",error)
      next(new NewException("Unauthorized",ErrorCodes.UNAUTHORIZED,error,401));
    }
  };
  
  export default  authMiddleWare;