import express from "express";
import { body } from "express-validator";
import { contact } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/contact",
    body("name").notEmpty(),
    body("email", "Not valid email id").isEmail(),
    body("contact", "Only digit is allowed").isNumeric(),
    body("message").notEmpty(), contact);

export default router;