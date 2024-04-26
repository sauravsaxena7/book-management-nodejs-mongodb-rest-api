

const signUpValidation = (data)=>{

    const error = {isValidationIssue:false};

    console.log("validation data",data)
    if(!data.username){
        error['isValidationIssue']=true;
        error['username']="Invalid Username";
        

    }

    if( !data.password ){
        error['isValidationIssue']=true;
        error['password']="Invalid Password";
        

    }

    if( !data.name ){
        error['isValidationIssue']=true;
        error['name']="Invalid name";
        

    }
    if(!data.confirmPassword){
        error['isValidationIssue']=true;
        error['confirmPassword']="invalid confirmPassword";
        

    }
    return error;

}

const loginValidation = (data)=>{

    const error = {};

    if(!data.username || !data.password ){
        error['isValidationIssue']=true;
        error['message']="One or more validation occur (username,password)";
        

    }else{
        error['isValidationIssue']=false;
    }

    return error;

}

const addOrUpdateBookValidation = (data)=>{

    const error = {};

    if(!data.title || !data.publication_year ){
        error['isValidationIssue']=true;
        error['message']="One or more validation occur (title,publication_year)";
        

    }else{
        error['isValidationIssue']=false;
    }

    return error;

}

export {signUpValidation,loginValidation,addOrUpdateBookValidation}