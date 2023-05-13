import express from "express";
import {soldProduct} from "../controller/sold.controller.js";
import multer from "multer";
const router = express.Router();
const upload = multer({dest:"public/billImages"});
router.post("/soldproduct",upload.single("bill"),upload.single("pOne"),upload.single("pTwo"),soldProduct);
export default router;