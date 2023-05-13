import express from "express";
import  {buyNow}  from "../controller/buyNow.controller.js";
const router = express.Router();
router.post('/buy-now',buyNow);



export default router;