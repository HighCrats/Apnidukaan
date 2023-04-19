import mongoose from "../db/dbConfig.js";

const earningSchema = new mongoose.Schema({
    earning: {
        type: Number
    }
});

const Earning = mongoose.model('Earning', earningSchema);

export default Earning;