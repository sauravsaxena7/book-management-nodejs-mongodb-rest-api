const cookieOption = {
     
    maxAge: 15*24*60*100,
    sameSite: "none",
    httpOnly: true,
    secure: true,
  };

  const sendToken = (user) =>{

    const token = jwt.sign({
        _id: user._id
    }, process.env.JWT_SECRET);

    
   return token;
 };




  export {cookieOption,sendToken}