import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import contactMail from '../services/contactEmail.js';
import nodemailer from "nodemailer";
import Contact from "../model/contact.model.js";

export const contact = async (request, response, next) => {
    try {
        const errors = await validationResult(request);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "Bad request", messages: errors.array() });
        let user = await Contact.create(request.body);
        contactMail(request.body.email, "From APNI DUKAAN", request.body.name)
        return response.status(200).json({ user: user, status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
};