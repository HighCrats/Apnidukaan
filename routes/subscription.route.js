import express from "express";
import { body } from "express-validator";
import { saveAll, save, list } from "../controller/subscription.controller.js";

const router = express.Router();

router.post("/saveAll", saveAll);

router.post("/save", save);

router.get("/list", list);

export default router;