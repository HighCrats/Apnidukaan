import express from "express";
import { verify } from "jsonwebtoken";
import { list, remove, verifyProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/list", list);

router.delete("/remove/:id", remove);

router.put("/:id/verify", verifyProduct);//not complete

export default router;