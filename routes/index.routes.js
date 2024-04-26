import { Router } from "express";
import bookRoutes from "./book.routes.js";
import authRoutes from "./auth.routes.js";


const rootRouter = Router();

rootRouter.use('/book/management',authRoutes)
rootRouter.use('/book/management/books',bookRoutes)

export default rootRouter