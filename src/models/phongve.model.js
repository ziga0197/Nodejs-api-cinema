const mongoose = require('mongoose');
const uri = "mongodb+srv://dang:Aa123456789@cinema-xups6.mongodb.net/test?retryWrites=true";

mongoose.connect(uri);

const PhongVeSchema = new mongoose.Schema({
    MaLichChieu: Number,
    DanhSachGhe: [
        {
            DaDat: Boolean,
            GiaVe: Number,
            LoaiGhe: String,
            MaGhe: Number,
            MaNhom: String,
            MaRap: Number,
            STT: Number,
            TaiKhoanNguoiDat: String,
            TenGhe: String,
        }
    ]
}, { collection: 'rooms' })
module.exports = mongoose.model('rooms', PhongVeSchema) 