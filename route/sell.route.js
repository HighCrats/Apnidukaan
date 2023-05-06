import express from "express";
import {sellProduct} from "../controller/sell.controller.js";
import multer from "multer";
const router = express.Router();
const upload = multer({dest:"public/billImages"});
const storage = multer.memoryStorage();
router.post("/sellproduct",upload.single("bill"),upload.array('images'),sellProduct);
export default router;