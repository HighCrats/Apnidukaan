import express from "express";
import bodyParser from "body-parser";
import mongoose from "./db/dbConfig.js";
import ProductRouter from './route/product.route.js';
import SubscriptionRoute from './route/subscription.route.js';
import OrderRoute from './route/order.route.js';
import CartRoute from './route/cart.route.js';
import UserRoute from './route/user.route.js';
import CategoryRoute from './route/category.route.js';

import Category from "../MongoAdmin/model/category.model.js";
export default Category;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/product", ProductRouter);

app.use("/order",OrderRoute);

app.use("/subscription",SubscriptionRoute);

app.use("/cart",CartRoute);

app.use("/user",UserRoute);

app.use("/category",CategoryRoute);

app.listen(3010, () => {
    console.log("Server Started...");
})