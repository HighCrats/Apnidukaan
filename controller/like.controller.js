import Like from "../model/like.model.js";

export const addLike = async (request, response, next) => {
    await Like.insertMany(request.body).then(result=>{
        return response.json({message : "INSERTED",status : true});
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}

export const removeLike =  (request, response, next) => {
    Like.deleteOne(request.body).then(result=>{
        return response.json({message : "Deleted",status : true});
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}

export const existLike = async (request, response, next) => {
    await Like.find().then(result=>{
        return response.json({status : true, result,message : "Existing Like" });
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}