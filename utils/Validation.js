

const signUpValidation = (data)=>{

    const error = {};

    if(!data.username || !data.password || !data.name || data.confirmPassword){
        error['isValidationIssue']=true;
        error['message']="One or more validation occur (username,password,name,confirmPassword)";
        

    }else{
        error['isValidationIssue']=false;
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
        error['message']="One or more validation occur (username,password)";
        

    }else{
        error['isValidationIssue']=false;
    }

    return error;

}

export {signUpValidation}