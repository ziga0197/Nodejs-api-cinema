const mongoose = require('mongoose');
const uri = "mongodb+srv://dang:Aa123456789@cinema-xups6.mongodb.net/test?retryWrites=true";

mongoose.connect(uri);

const CommentSchema = new mongoose.Schema({
    MaPhim: String,
    TaiKhoanNguoiDung: String,
    Comments: String,
}, { collection: 'comments' })

module.exports = mongoose.model('Comments', CommentSchema) 