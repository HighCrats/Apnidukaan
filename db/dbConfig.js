import mongoose from "mongoose";

mongoose.connect("mongodb+srv://chinuvakare:7BNxqnaLLqwJzWWa@cluster0.muojsz7.mongodb.net/apnidukaan?retryWrites=true&w=majority")
    .then(result => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
    });

export default mongoose;