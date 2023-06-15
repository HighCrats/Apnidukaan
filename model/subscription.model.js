import mongoose  from "mongoose";
import today from "../controller/expiry.js";
import expiryDate from '../controller/date.js';


const subscriptionSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    subscriptionPrice:{
        type:Number,
        required:true
    },
    startDate:{
        type:String,
        default : today,
        required:true
    },
    subscriptionExpiry:{
        type:String,
        default:expiryDate
    }
})

export const Subscription = mongoose.model("subscription",subscriptionSchema);