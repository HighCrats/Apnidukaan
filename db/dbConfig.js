import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/apnidukan")
    .then(result => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
    });

export default mongoose;