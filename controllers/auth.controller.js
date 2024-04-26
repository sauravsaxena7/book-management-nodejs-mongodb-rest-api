import { compareSync } from "bcrypt";
import { NewException } from "../exceptions/Exception";
import { ErrorCodes } from "../exceptions/RootException";
import { Author } from "../models/auth.model";
import { cookieOption, sendToken } from "../utils/JwtHandle";
import { signUpValidation } from "../utils/Validation";

export const signup = async (req, res) => {
  const validate = signUpValidation(req.body);
  if (validate.isValidationIssue) {
    throw new NewException("Bad Requests", 4002, validate, 400);
  }
  const { name, username,password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    throw new NewException(
      "password and confirmPassword do not match",
      ErrorCodes.BAD_REQUEST,
      null,
      400
    );
  }

  const author = await Author.create({
    name,
    username,
    password,
  });

  const token = sendToken(author);

  return res.status(201).cookie("lola-token", token, cookieOption).json({
    success: true,
    message:"Author added."
  });
};


export const login = async (req, res) => {
    const validate = loginValidation(req.body);
    if (validate.isValidationIssue) {
      throw new NewException("Bad Requests", 4002, validate, 400);
    }
    const { username, password} = req.body;
  
    
  
    const user = await Author.findOne({username}).select("+password");
   
  
    const isMatch = await compareSync(password, user.password);
    if(!isMatch || !user)  throw new NewException("Invalid username or Password",ErrorCodes.BAD_REQUEST,null, 400);
  
    const token = sendToken(user);
  
    return res.status(200).cookie("lola-token", token, cookieOption).json({
      success: true,
      message:"Login Successful."
    });
  };


  export const getMyProfile=async(req,res)=>{
    return res.status(200).json({
        success: true,
        message:"Author Fetched.",
        author:req.user
      });
  }


  export const logout = async(req, res) => { 
    return res.cookie("lola-token", "", {...cookieOption, maxAge: 0}).json({
       success: true,
       message: "Logout Successful",
    });
   };
  
