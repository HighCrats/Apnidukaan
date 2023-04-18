import mongoose from "../db/dbConfig.js";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address.`,
        },
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number.`,
        },
    },
    location: {
        type: String,
        required: true,
    }
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;