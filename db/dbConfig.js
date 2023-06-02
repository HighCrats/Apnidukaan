import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user1:user123@cluster0.wytrnkb.mongodb.net/apnidukaan?retryWrites=true&w=majority")
    .then(result => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
    });

export default mongoose;
