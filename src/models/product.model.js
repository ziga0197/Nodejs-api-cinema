const mongoose = require('mongoose');
const uri = "mongodb+srv://dang_01:Aa123456789@dangnguyen-sncne.mongodb.net/test?retryWrites=true";

mongoose.connect(uri);

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    price: {
        type: String
    }
})

module.exports = mongoose.model('Product', productSchema) 