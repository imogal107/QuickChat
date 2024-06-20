import express from "express";
import {getUsersForSidebar} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js"


const router =  express.Router();


//get user for sidebar
router.get("/", protectRoute,  getUsersForSidebar);


export default router;