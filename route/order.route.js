import express from "express";
import { orderSave, orderList } from "../controller/order.controller.js";

const router = express.Router();

//save order
router.post("/save", orderSave);

//show user order
router.post("/myOrder", orderList);

export default router;