import mongoose from "../db/dbConfig.js";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    subCategory_ID: {
        type: Number,
    },
    category_name: {
        type: String,
    },
    users_id: {
        type: Number,
    },
    bill: {
        type: String,
    },
    image: {
        type: String,
    },
    images: {
        type: String,
    },
});

const Product = mongoose.model('Product', productSchema);

export default Product;