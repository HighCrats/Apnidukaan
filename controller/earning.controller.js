import { request } from "express";
import Earning from "../model/earning.model.js";

export const getEarning = ((req, res, next) => {
    Earning.find().
        then(result => {
            return response.status(200).json({ earning: result, status: true });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error", status: false });
        })
});