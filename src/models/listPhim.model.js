const mongoose = require('mongoose');
const uri = "mongodb+srv://dang:Aa123456789@cinema-xups6.mongodb.net/test?retryWrites=true";

mongoose.connect(uri);

const listPhimSchema = new mongoose.Schema({
    MaPhim: Number,
    TenPhim: String,
    Trailer: String,
    MoTa: String,
    NgayKhoiChieu: String,
    DanhGia: Number,
    HinhAnh: String,
    LichChieu: [
        {
            GiaVe: Number,
            MaLichChieu: String,
            MaNhom: String,
            MaPhim: Number,
            MaRap: Number,
            NgayChieuGioChieu: String,
            Rap: {
                MaRap: Number,
                TenRap: String,
                SoGhe: Number,
                MaNhom: String,
            },
            ThoiLuong: Number,
        }
    ]

}, { collection: 'lists' })
module.exports = mongoose.model('List', listPhimSchema) 