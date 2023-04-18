import mongoose from "../db/dbConfig.js";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    categoryId: {
        type: Number,
        required: true,
    },
    categoryName: {
        type: String,
        required: true,
    },
    usersId: {
        type: String,
        required: true,
    },
    bill: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    images: {
        type: String,
    },
    Date: {
        type: String,
        required: true,
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;