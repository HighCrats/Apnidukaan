import mongoose from "mongoose";

const smsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    contact: {
        type: String
    }
});

const Sms = mongoose.model('Sms', smsSchema);

export default Sms;