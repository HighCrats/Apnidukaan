import User from '../model/user.model.js'
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

export const list = async (request, response, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        request.status(500).send('Server Error');
    }
};


export const block = async (request, response, next) => {
    try {
        const user = await User.findById(request.params.email);
        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }
        user.isVerified = true;
        await user.save();
        response.json({ msg: 'User verified Succesfully' });
    } catch (err) {
        console.error(err.message);
        response.status(500).send('Internal Server Error');
    }

}
