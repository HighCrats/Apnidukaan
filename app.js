import express from "express";
import bodyParser from "body-parser";
import mongoose from "./db/dbConfig.js";

import AdminRouter from './routes/admin.route.js';
import UserRouter from './routes/user.route.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/admin', AdminRouter);

app.use('/user' , UserRouter);

app.listen(100, () => {
    console.log("Server Started");
})