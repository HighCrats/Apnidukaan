import { validationResult } from "express-validator";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import mail from '../services/email.js';
import nodemailer from "nodemailer";

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

export const forgotPassword = async (request, response, next) => {
    try {
        let user = await User.findOne({ email: request.body.email });
        if (!user) {
            return response.status(400).json({ error: "Bad request", message: "No user found" });
        }

        const resetUrl = `${request.protocol}://${request.get(
            "host"
        )}/reset-password`;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'harshitasisodiya94@gmail.com',
                pass: 'ucuskkfemmrbifir'
            }
        });

        const mailOptions = {
            from: 'harshitasisodiya94@gmail.com',
            to: user.email,
            subject: "Request for Reset your Password",
            text: `Hi ${user.name},\n\n Please click on the link to reset your password : \n\n${resetUrl}\n\n If you do not want to reset your password , ignore us.`,
        };

        await transporter.sendMail(mailOptions);

        return response.status(200).json({ message: "link sent successfully" });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
};
