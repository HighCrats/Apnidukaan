import express from "express";
import { body } from "express-validator";
import { saveAll, save, update, remove, list } from "../controller/category.controller.js";

const router = express.Router();

router.post("/saveAll", saveAll);

router.post("/save", body("categoryName").notEmpty(), save);

router.post("/update", body("categoryName").notEmpty(), update);//not complete

router.post("/remove", remove);

router.get("/list", list);

export default router;