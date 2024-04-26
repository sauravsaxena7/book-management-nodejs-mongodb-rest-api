import mongoose,{Schema,Types,model} from "mongoose"

const schema = new Schema({
    title:{
        type:String,
        required:true,
    },
    publication_year:{
        type:String,
        required:true
    },
   author:{
        type:Types.ObjectId,
        ref:"Author"
    },
    
},{
    timestamps:true
});

export const Book = mongoose.models.Book || model("Book",schema);