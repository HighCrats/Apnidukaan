import mongoose from "../db/dbConfig.js";

const userSubscriptionSchema = new mongoose.Schema({
    usersId: {
        type: Number,
        required: true,
    },
    planId: {
        type: Number,
        required: true,
    }
});

const userSubscription = mongoose.model('userSubscription', userSubscriptionSchema);

export default userSubscription;