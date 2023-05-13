import mongoose from "mongoose";

const soldSchema = new mongoose.Schema({
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
    type:String,
    required:true
  },
  pOne:{
    type:String,
    required:true
  },
  pTwo:{
    type:String,
    required:true
  }
});

const Sold = mongoose.model('Sold', soldSchema);
export default Seller;