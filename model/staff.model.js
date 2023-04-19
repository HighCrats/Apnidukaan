import mongoose from "../db/dbConfig.js";

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;