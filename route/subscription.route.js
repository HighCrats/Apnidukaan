import express from "express";
import { addSubscription } from "../controller/subscription.controller.js";

const router = express.Router();

//add subscription
router.post("/addSubscription",addSubscription);

//view subscription plans //we have to create inadmin
//router.get("/viewSubscription",viewSubscription);


export default router;