import { NewException } from "../exceptions/Exception.js";
import { Book } from "../models/book.model.js";
import { addOrUpdateBookValidation } from "../utils/Validation.js"

export const AddNewBook=async(req,res)=>{
    const validate = addOrUpdateBookValidation(req.body);

    if(validate.isValidationIssue){
        throw new NewException("Bad Requests", 4002, validate, 400);
    }
    const {title,publication_year}=req.body

    const book = await Book.create({
        title:title,
        publication_year:publication_year,
        author:req.user._id
    });

    return res.status(200).json({
        success: true,
        message:"New Book Added.",
        book:book
      });
}
export const UpdateBook=async(req,res)=>{
    const validate = addOrUpdateBookValidation(req.body);

    if(validate.isValidationIssue){
        throw new NewException("Bad Requests", 4002, validate, 400);
    }
    const {title,publication_year}=req.body

    const {book_id}=req.query;



    const book = await Book.findByIdAndUpdate(book_id, { title:title,publication_year:publication_year}, { new: true, returnDocument: "after" })

    return res.status(200).json({
        success: true,
        message:"book updated.",
        book:book
      });
}
export const DeleteBook=async(req,res)=>{
 

    const {book_id}=req.query;



     await Book.findByIdAndDelete(book_id)

    return res.status(200).json({
        success: true,
        message:"book deleted.",
        
      });
}

export const searchBook=async (req,res)=>{

    const {title,publication_year,author}=req.query


    let books = await Book.find().populate({ path: 'author', name: { $ne: author } }).exec();

    books=books?.filter((ele)=>ele.publication_year===publication_year);

    return res.status(200).json({
        success: true,
        message:"all book fetched.",
        books:books
      });
}