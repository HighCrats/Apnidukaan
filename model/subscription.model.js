import mongoose from "../db/dbConfig.js";

const subscriptionSchema = new mongoose.Schema({
    usersId: {
        type: Number,
        required: true,
    },
    planId: {
        type: Number,
        required: true,
    }   
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;