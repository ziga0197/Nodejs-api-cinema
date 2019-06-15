const mongoose = require('mongoose');
const uri = "mongodb+srv://dang:Aa123456789@cinema-xups6.mongodb.net/test?retryWrites=true";

mongoose.connect(uri);

const TicketSchema = new mongoose.Schema({
    MaPhim: String,
    TaiKhoanNguoiDung: String,
    DanhSachVe: [
        {
            MaGhe: Number,
            GiaVe: Number
        }
    ]
}, { collection: 'ticket' })

module.exports = mongoose.model('Ticket', TicketSchema) 