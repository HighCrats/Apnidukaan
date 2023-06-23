import express from "express";
import { addSubscription } from "../controller/subscription.controller.js";

const router = express.Router();

//add subscription
router.post("/addSubscription", addSubscription);

export default router;