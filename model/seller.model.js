import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  bill:{
    type:String
  }
});

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;