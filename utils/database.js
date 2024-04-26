import mongoose from "mongoose"

const connectDB = (uri,db_name)=>{
    mongoose.connect(uri,{dbName:db_name})
    .then((data)=>{
        console.log(`connected to db: ${data.connection.host} `)
    }).catch((err)=>{
        console.log("error in mongodb connection",err);
        throw err;
    });
}

export {connectDB};