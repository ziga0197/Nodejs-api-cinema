const mongoose = require('mongoose');
const uri = "mongodb+srv://dang:Aa123456789@cinema-xups6.mongodb.net/test?retryWrites=true";

mongoose.connect(uri);

const userSchema = new mongoose.Schema({
    TaiKhoan: String,
    MatKhau: String,
    HoTen: String,
    Email: String,
    SoDT: Number,
    MaLoaiNguoiDung: String,
    MaNhom: String,
    TenLoaiNguoiDung: String,

}, { collection: 'users' })
module.exports = mongoose.model('User', userSchema) 