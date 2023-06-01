import { validationResult } from "express-validator";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import forgotPassword from "../services/forgotPassword.js";

export const signIn = async (request, response, next) => {
    try {
        let user = await User.findOne({ email: request.body.email });
        if (user) {
            let status = await bcrypt.compare(request.body.password, user.password);
            if (status)
                return response.status(200).json({ message: "Sign in success", status: true, user });
            return response.status(400).json({ error: "Bad request", status: false });
        }
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const signUp = async (request, response, next) => {
    try {
        const errors = await validationResult(request);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "Bad request", messages: errors.array() });
        let saltKey = await bcrypt.genSalt(10);
        let encryptedPassword = await bcrypt.hash(request.body.password, saltKey);
        request.body.password = encryptedPassword;
        let user = await User.create(request.body);
        mail(request.body.email, "From APNI DUKAAN", request.body.name)
        return response.status(200).json({ user: user, status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
};

export const checkUser = async (request, response, next) => {
    try {

        function generateOTP() {
            var digits = "0123456789";
            let OTP = "";
            for (let i = 0; i < 4; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            return OTP;
        };

        const data = await User.findOne({ email: request.body.email });
        const OTP = await generateOTP();
        let email = forgotPassword(request.body.email, "Forgott Password Change Related", data?.name, OTP);
        if (email)
            return response.status(200).json({ user: data, otp: OTP, status: true });
        else
            return response.status(400).json({ Message: "User is unauthorized", status: false });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ message: 'Internal server error...', status: false });
    }
}

export const updatePassword = async (request, response, next) => {
    try {
        console.log(request.body);
        request.body.password = await bcrypt.hash(request.body.password, await bcrypt.genSalt(10));
        const user = await User.findOneAndUpdate({ email: request.body.email }, { password: request.body.password });
        console.log(user);
        if (!user?.status)
            return response.status(200).json({ Message: 'Password Updated success', status: true });
        return response.status(400).json({ Message: 'Unauthorized User...', status: false });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ Message: 'Internal Server Error...', status: false });
    }
}
