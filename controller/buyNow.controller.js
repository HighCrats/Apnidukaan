import Order from "../model/order.model.js";

export const buyNow = async (req, res) => {
  const { username, email, address, contact, date, paymentMode, totalAmount } = req.body;
  const userId = req.user._id;
  const order = new Order({
    username,
    email,
    address,
    contact,
    date,
    paymentMode,
    totalAmount,
    userId,
  });

  try {
    await order.save();
    res.status(200).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
