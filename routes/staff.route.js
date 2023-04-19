import express from "express";
import { addStaff, saveAllStaff, getListOfStaff, removeStaff, updateStaff } from "../controller/staff.controller.js";

const router = express.Router();

router.post('/deliverystaff/:email', addStaff)

router.post("/saveAll", body("email").notEmpty(), saveAllStaff);

router.put("/update/:email", body("email").notEmpty(), updateStaff);

router.delete("/remove/:email", removeStaff);

router.get("/list", getListOfStaff);

export default router;