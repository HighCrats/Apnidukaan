import Order from "../model/order.model.js";

export const orderSave = async (request, response, next) => {
    await Order.insertMany(request.body).then(result => {
        return response.json({ message: "INSERTED", status: true });
    })
        .catch(err => {
            console.log(err);
            return response.json({ error: "error", status: false });
        });
}

export const orderList = async (request, response, next) => {
    await Order.find(request.body).then(result => {
        return response.json({ status: true, result, message: "Order List" });
    })
        .catch(err => {
            console.log(err);
            return response.json({ error: "error", status: false });
        });
}