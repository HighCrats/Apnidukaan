import Category from '../model/category.model.js';

export const saveAll = async (request, response, next) => {
    Category.insertMany([request.body.categories])
        .then(result => {
            return response.json({ message: "Save Category" });
        }).catch(err => {
            return response.json({ error: "error" });
        })
}

export const list = async (request, response, next) => {
    Category.find().
        then(result => {
            return response.status(200).json({ categories: result, status: true });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error", status: false });
        })
}

export const save = async (request, response, next) => {
    Category.insertMany(request.body)
        .then(result => {
            return response.json({ message: "Save Category Successfully" });
        }).catch(err => {
            return response.json({ error: "error" });
        })
}

export const update = async (request, response, next) => {

}

export const remove = async (request, response, next) => {
    Category.deleteOne({ id: request.body.id }).then(result => {
        return response.status(200).json({ message: "Category removed", status: true });
    }).catch(err => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
}