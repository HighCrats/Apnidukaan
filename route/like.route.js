import express from "express";
import { addLike, removeLike, existLike } from "../controller/like.controller.js";

const router = express.Router();

//added to favourite
router.post("/addLike",addLike);

//remove from favourite
router.post("/removeLike",removeLike);

//show existing favourite
router.get("/existLike",existLike);


export default router;