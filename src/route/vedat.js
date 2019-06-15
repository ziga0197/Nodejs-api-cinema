const TicketModel = require('../models/vedat.model');
const express = require('express');
const router = express.Router();

// CREATE new comment
router.post('/create-ticket', (req, res) => {
    // console.log(req.body);
    if (req.body) {
        let model = new TicketModel(req.body);
        model.save()
            .then((doc) => {
                if (!doc) {
                    return res.status(500).send(doc);
                }
                res.status(201).send(doc);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    } else {
        return res.status(400).send('Request body is missing');
    }
});


router.get('/:tk', (req, res) => {
    if (req.body) {
        TicketModel.find({
            TaiKhoanNguoiDung: req.params.tk
        }, (err, docs) => {
            if (err || !docs) {
                res.status(500).send('Can not get comment');
                console.log(docs)
            } else {
                console.log(docs);
                res.status(200).send(docs);
            }
        })
    } else {
        res.status(404).send('Something went wrong');
    }
});
module.exports = router;