import Product from "../model/product.model.js";

export const addProduct = async (request, response, next) => {
    await Product.insertMany(request.body).then(result=>{
        return response.json({message : "Product Added ",status : true});
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}

export const searchProduct = async (request, response, next) => {
    await Product.find(request.params).then(result=>{
        return response.json({status : true, result,message : "Product List" });
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}

export const deleteProduct =  (request, response, next) => {
    Product.deleteOne(request.body).then(result=>{
        return response.json({message : "Deleted",status : true});
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}

export const myProduct = async (request, response, next) => {
    await Product.find(request.params).then(result=>{
        return response.json({status : true, result,message : "My Product List" });
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}

export const productDescription = async (request, response, next) => {
    await Product.find(request.body).then(result=>{
        return response.json({status : true, result,message : "Product Description" });
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}

export const updateProduct = async (request, response, next) => {
    await Product.updateOne(request.body).then(result=>{
        return response.json({message : "Product Updated ",status : true});
    })
    .catch(err => {
         console.log(err);
         return response.json({error : "error",status : false});
    });
}