import mongoose from "../db/dbConfig.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]+$/
    },
    location: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

export default User;