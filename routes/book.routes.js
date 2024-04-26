import { Router } from "express";
import authMiddleWare from "../middlewares/authMiddleWare.js"
import { errorHandler } from "../ErrorHandler.js";
import { AddNewBook, DeleteBook, UpdateBook, searchBook } from "../controllers/book.controller.js";

const bookRoutes = Router();

bookRoutes.post('/add/newBook',[authMiddleWare],errorHandler(AddNewBook))
bookRoutes.put('/update/updateBook',[authMiddleWare],errorHandler(UpdateBook))
bookRoutes.delete('/deleteBook',[authMiddleWare],errorHandler(DeleteBook))
bookRoutes.get('/getAllBooks',[authMiddleWare],errorHandler(searchBook))

export default bookRoutes;