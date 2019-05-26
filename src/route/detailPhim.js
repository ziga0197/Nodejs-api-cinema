const ListPhimModel = require('../models/listPhim.model');
const DetailPhimModel = require('../models/detailPhim.model');
const express = require('express');
const router = express.Router();

// CREATE new product
router.post('/create-phim', (req, res) => {
    // console.log(req.body);
    if (req.body) {
        let model = new DetailPhimModel(req.body);
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
// GET all products
router.get('/:id', (req, res) => {
    if (req.body) {
        ListPhimModel.findOne({
            _id: req.params.id
        }, (err, docs) => {
            if (err || !docs) {
                res.status(500).send('Can not get detail phim');
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
// // UPDATE product
// router.put('/update-phim/:id', (req, res) => {
//     console.log(`update-product`);
//     if (req.body) {
//         if (req.params.id) {
//             ProductModel.findByIdAndUpdate({
//                 _id: req.params.id
//             }, req.body, {
//                     new: true
//                 })
//                 .then((doc) => {
//                     res.json(doc);
//                 })
//                 .catch((err) => {
//                     res.status(500).json(err);
//                 })
//         } else {
//             res.status(400).send('Missing id params')
//         }
//     } else {
//         res.status(400).send('Something went wrong')
//     }
// })
// // DETELE
// router.delete('/delete-product/:id', (req, res) => {
//     console.log(`delete-product`);
//     if (req.body) {
//         if (req.params.id) {
//             ProductModel.findByIdAndDelete({
//                 _id: req.params.id
//             })
//             .then((doc) => {
//                 if (doc) {
//                     res.json(doc);
//                 }else{
//                     res.send('Not exist');
//                 }
//             })
//             .catch((err) => {
//                 res.status(500).json(err);
//             })
//         } else {
//             res.status(400).send('Missing id params')
//         }
//     } else {
//         res.status(400).send('Something went wrong')
//     }
// })
module.exports = router;

