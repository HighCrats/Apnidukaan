import { Cart } from "../model/cart.model.js";

export const addToCart = async (request, response, next) => {
  try {
    let cart = await Cart.findOne({ userId: request.body.usersId });
    if (cart != null) {
      if (cart.cartItems.some((item) => item.productId == request.body.productId))
        return response.status(200).json({ message: "product already added in cart", status: true })
      cart.cartItems.push({ productId: request.body.productId });
      let savedCart = await cart.save();
      return response.status(200).json({ message: "Product successfull added in cart", status: true });
    }
    else {
      let savedCart = await Cart.create({
        userId: request.body.usersId,
        cartItems: request.body.cartItem
      });
      return response.status(200).json({ message: "Item added successfully", status: true });
    }
  }
  catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error", status: false });
  }
}

export const cartData = async (request, response, next) => {
  Cart.find({ userId: request.body.userId })
    .populate("cartItems.productId").then(result => {
      return response.status(200).json(result[0].cartItems);
    }).catch(err => {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    })
}

export const removeData = async (request, response, next) => {
  let productId = request.body.productId;
  Cart.find({ userId: request.body.userId }).populate("cartItems.productId")
    .then(result => {
      let result1 =  result[0].cartItems.filter(product=> product.productId != productId );
      console.log(result1);
      return response.status(200).json(result1);
    }).catch(err => {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    })
}
