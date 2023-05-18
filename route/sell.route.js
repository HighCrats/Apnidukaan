import express from "express";
import {fetchProduct, sellProduct} from "../controller/sell.controller.js";
import multer from "multer";

const router = express.Router();

const upload = multer({dest:"public/billImages"});

router.post("/sellproduct",upload.single("bill"),sellProduct);

router.get("/fetch-sell",fetchProduct);

export default router;