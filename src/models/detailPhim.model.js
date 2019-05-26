const mongoose = require('mongoose');
const uri = "mongodb+srv://dang:Aa123456789@cinema-xups6.mongodb.net/test?retryWrites=true";

mongoose.connect(uri);

const PhimSchema = new mongoose.Schema({
    phim: {
        MaPhim: String,
        TenPhim: String,
        Trailer: String,
        HinhAnh: String,
        MoTa: String,
        MaNhom: String,
        NgayKhoiChieu: String,
        DanhGia: Number,
        LichChieu: [
            {
                GiaVe: Number,
                MaLichChieu: Number,
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
    }
},{ collection: 'phims' })
module.exports = mongoose.model('Phim', PhimSchema) 