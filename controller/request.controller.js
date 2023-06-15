import Request from "../model/request.model.js"

export const saveRequest = async (request, response, next) => {
    try {
        let result = await Request.create(request.body);
        return response.status(200).json({ msg: "Request Added", status: true,result: result});
    }
    catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const getRequest = async (request, response, next) => {
    try {
        let result = await Request.find({email : request.body.email}).populate('productId');
        return response.status(200).json({ msg: "Requests ", status: true,result: result});
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}