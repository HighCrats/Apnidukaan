import express from "express";
import { getRequest, saveRequest } from "../controller/request.controller.js";

const router = express.Router();

router.post("/saveRequest",saveRequest);

router.post("/getRequest",getRequest);

export default router;