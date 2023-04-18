import mongoose from "../db/dbConfig.js";

const likeSchema = new mongoose.Schema({
    usersId: {
        type: Number,
        required: true,
    },
    productsId: {
        type: Number,
        required: true,
    }   
});

const Like = mongoose.model('Like', likeSchema);

export default Like;