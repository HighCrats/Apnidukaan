import express from "express";
import { sendMessage } from "../controller/sms.controller.js";

const router = express.Router();

router.post('/sms', sendMessage);

export default router;