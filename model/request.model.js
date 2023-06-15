import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "product"
    }
});

const Request = mongoose.model("Request",requestSchema);

export default Request;