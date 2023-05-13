import mongoose from "../db/dbConfig.js";

const productSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    categoryname: {
        type: String
    },
    users_id: {
        type: String
    },
    bill: {
        type: Number
    },
    thumbnail: {
        type: String
    },
    images: {
        type: Array,
    }
});

const Product = mongoose.model('product', productSchema);

export default Product;