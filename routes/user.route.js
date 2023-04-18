import express from "express";
import { list, block } from "../controller/user.controller.js";

const router = express.Router();

router.get("/list", list);

router.put("/users/:id/verify", block);

export default router;