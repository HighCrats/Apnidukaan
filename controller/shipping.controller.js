import Shipping from "../model/shipping.model.js";

export const addshiping = async (request, response, next) => {
    Shipping.insertMany([request.body.categories])
        .then(result => {
            return response.json({ message: "Save Shipping" });
        }).catch(err => {
            return response.json({ error: "error" });
        })
};

export const getShipping = async (request, response, next) => {
    Shipping.find().
        then(result => {
            return response.status(200).json({ shipping: result, status: true });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error", status: false });
        })
}