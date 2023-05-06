import mongoose from "../db/dbConfig.js";

const orderSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    paymentMode: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    usersId: {
        type: Number,
        required: true,
    }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;