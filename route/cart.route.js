import express from "express";
import { addToCart, cartData,removeData } from "../controller/cart.controller.js";

const router = express.Router();

router.post("/add-to-cart", addToCart);

router.post("/fetch-cart", cartData);

router.post("/removeFromCart",removeData)

export default router;