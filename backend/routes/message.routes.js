import express from "express";
import {getMessages, sendMessage} from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js"
const router =  express.Router();

//send messages route
router.post("/send/:id", protectRoute,  sendMessage );
//get messages
router.get("/:id", protectRoute,  getMessages);


export default router;