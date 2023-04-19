import express from "express";
import { list } from "../controller/category.controller.js";

const router = express.Router();

router.get("/list",list);
export default router