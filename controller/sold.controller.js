import { validationResult } from "express-validator";
import Seller from "../model/seller.model.js";

export const soldProduct = async(request,response,next)=>{
    console.log(request.body);
    try{
        const description = request.body.description;
        const title = request.body.title;
        const price = request.body.price;
        const bill = request.file.filename;
        console.log(bill);                                           
        request.body.bill = request.file.filename;
        const errors= await validationResult(request);
        if(!errors.isEmpty())   
        return response.status(400).json({ error: "Bad request", messages: errors.array() });
        let seller = await Seller.create({price,description,title,bill});
            return response.status(200).json({ seller: seller, status: true });    
    }
    catch (err) {
        window.alert("internal server error");
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }   
 }; 
