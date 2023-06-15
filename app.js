import express from "express";
import bodyParser from "body-parser";
import mongoose from "./db/dbConfig.js";
import ProductRoute from './route/product.route.js';
import SubscriptionRoute from './route/subscription.route.js';
import OrderRoute from './route/order.route.js';
import CartRoute from './route/cart.route.js';
import UserRoute from './route/user.route.js';
import CategoryRoute from './route/category.route.js';
import BuyNowRoute from './route/buyNow.router.js';
import ContactRoute from './route/contact.route.js';
import SellRoute from "./route/sell.route.js";
import SmsRoute from './route/sms.route.js';
import path from "path";
import { fileURLToPath } from 'url';
import Category from "../adminBackend/model/category.model.js";
export default Category;

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public/billImages")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/product", ProductRoute);

app.use("/order", OrderRoute);

app.use("/subscription", SubscriptionRoute);

app.use("/cart", CartRoute);

app.use('/buyNow', BuyNowRoute);

app.use("/user", UserRoute);

app.use("/contactUser", ContactRoute);

app.use("/smsUser",SmsRoute);

app.use("/category", CategoryRoute);

app.use("/sell", SellRoute);

app.listen(3010, () => {
    console.log("Server Started...");
});