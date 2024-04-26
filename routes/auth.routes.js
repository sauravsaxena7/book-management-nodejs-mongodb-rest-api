import { Router } from "express";
import { errorHandler } from "../ErrorHandler.js";
import authMiddleWare from "../middlewares/authMiddleWare.js"


import {getMyProfile, login, logout, signup} from "../controllers/auth.controller.js"
const authRoutes = Router();

authRoutes.post('/login',errorHandler(login))
authRoutes.post('/signup',errorHandler(signup))
authRoutes.get('/me',[authMiddleWare],errorHandler(getMyProfile))
authRoutes.get('/logout',errorHandler(logout))

export default authRoutes;