import express from "express";
import { body } from "express-validator";
import { checkUser, signIn, signUp, updatePassword } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signin", signIn);

router.post("/signup",
    body("name").notEmpty(),
    body("email", "Not valid email id").isEmail(),
    body("contact", "Only digit is allowed").isNumeric(),
    body("password", "please enter password").notEmpty(),
    body("password", "password must have 5 letter at least").isLength({ min: 5 })
    , signUp);

router.post('/checkUser',checkUser);

router.post('/updatePassword',updatePassword);

export default router;