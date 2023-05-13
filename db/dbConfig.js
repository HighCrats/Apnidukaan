import mongoose from "mongoose";




mongoose.connect("mongodb+srv://harshitasisodiya:harshita2810@cluster0.wytrnkb.mongodb.net/apnidukaan?retryWrites=true&w=majority")
    .then(result => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
    });

export default mongoose;
