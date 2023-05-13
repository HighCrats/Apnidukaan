import Category from "../app.js";

export const list = (request, response) => {
    Category.find()
        .then(result => {
            return response.status(200).json({ categories: result, status: true });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error", status: false });
        })
};