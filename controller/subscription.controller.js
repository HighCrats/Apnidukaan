import { request, response } from "express";
import Subscription from "../model/subscription.model.js";
import { validationResult } from "express-validator";

export const saveAll = async (request, response, next) => {
    Subscription.insertMany([request.body.categories])
        .then(result => {
            return response.json({ message: "Save Category" });
        }).catch(err => {
            return response.json({ error: "error" });
        })
}

export const list = async (request, response, next) => {
    Subscription.find().
        then(result => {
            return response.status(200).json({ categories: result, status: true });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error", status: false });
        })
}

export const save = async (request, response, next) => {
    Subscription.insertMany(request.body)
        .then(result => {
            return response.json({ message: "Save Category Successfully" });
        }).catch(err => {
            return response.json({ error: "error" });
        })
}