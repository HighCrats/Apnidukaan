import express from "express";
import { addToCart, cartData } from "../controller/cart.controller.js";

const router = express.Router();

router.post("/add-to-cart", addToCart);

router.post("/fetch-cart", cartData);

export default router;