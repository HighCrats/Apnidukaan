import express from "express";
import {  expireSubscription, sendOtp, showSubscriptions, subscription, updateBalance } from "../controller/subscription.controller.js";

const router = express.Router();


router.post("/Subscription", subscription)
router.post('/expireSubscription',expireSubscription)
router.post('/showSubscription',showSubscriptions)
router.post('/sendotp',sendOtp);
router.post('updateBalance',updateBalance)

export default router;