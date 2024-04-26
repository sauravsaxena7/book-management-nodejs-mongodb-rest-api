import { Author } from "../models/auth.model";

const authMiddleWare = async (
    req,
    res,
    next
  ) => {
    // 1. extract the token from header
    const token = req.cookies["lola-token"];
  
  
    // 2. if token is not present, throw an error of unauthorized
    if(!token){
      next(new UnAuthorizedException("Unauthorized Invalid token",ErrorCodes.UNAUTHORIZED));
    }
  
    try {
      // 3. if the token is present, verify that token and extract the payload
      const payload =  jwt.verify(token, JWT_SECRET) ;
  
      // 4. to get the user from the payload const user = await prismaClient.user.findFirst({where:{id:payload.userId}});
      const user = await Author.findById(payload._id);
      if (!user) {
          next(new UnAuthorizedException('Unauthorized with user not found', ErrorCodes.UNAUTHORIZED))
      }
     
  
      // 5. to attach the user to the current request obejct
      
      req.user =user;
      next();
  
  
    }catch(error){
      next(new UnAuthorizedException("Unauthorized",ErrorCodes.UNAUTHORIZED,error));
    }
  };
  
  export default  authMiddleWare;