import twilio from 'twilio';
import sms from "../services/sms.js";
import Sms from "../model/sms.model.js";

export const sendMessage = async (request, response, next) => {
    try {
        let user = await Sms.create(request.body);
        sms(request.body.name, request.body.contact);
        return response.status(200).json({ user: user, status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
};