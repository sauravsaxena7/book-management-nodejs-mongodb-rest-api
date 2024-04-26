import { Router } from "express";
import { AddNewBook, DeleteBook, UpdateBook, searchBook } from "../controllers/book.controller.js";
import authMiddleWare from "../middlewares/authMiddleWares.js";
import { errorHandler } from "../ErrorHandler.js";

const bookRoutes = Router();

bookRoutes.post('/add/newBook',[authMiddleWare],errorHandler(AddNewBook))
bookRoutes.put('/update/updateBook',[authMiddleWare],errorHandler(UpdateBook))
bookRoutes.delete('/deleteBook',[authMiddleWare],errorHandler(DeleteBook))
bookRoutes.get('/getAllBooks',[authMiddleWare],errorHandler(searchBook))

export default bookRoutes;