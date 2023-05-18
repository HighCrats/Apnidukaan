import { validationResult } from "express-validator";
import Seller from "../model/seller.model.js";

export const sellProduct = async(request,response,next)=>{
    try{
        let bill=request.file.filename;
        let {description,title,price} = request.body;
        request.body.bill=request.file.filename; 
        const errors= await validationResult(request);
        if(!errors.isEmpty())   
        return response.status(400).json({ error: "Bad request", messages: errors.array() });
        let seller = await Seller.create({price,description,title,bill});
            return response.status(200).json({ seller: seller, status: true });    
    }   
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }   
 }; 
 
 export const fetchProduct = (request, response, next) => {
  Seller.find()
      .then(result => {
          return response.json({ status: true, result:result, message: "Product List" });
      })
      .catch(err => {
          console.log(err);
          return response.json({ error: "error", status: false });
      });
}
