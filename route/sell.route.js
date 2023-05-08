import express from "express";
import {sellProduct} from "../controller/sell.controller.js";
import multer from "multer";
const router = express.Router();
const upload = multer({dest:"public/billImages"});
router.post("/sellproduct",upload.single("bill"),sellProduct);
export default router;