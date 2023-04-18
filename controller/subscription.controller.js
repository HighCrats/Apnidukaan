import Subscription from "../model/subscription.model.js";

export const addSubscription = async (request, response, next) => {
    await Subscription.insertMany(request.body).then(result=>{
        return response.json({message : "Subscription Added",status : true});
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}