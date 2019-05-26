const ListPhimModel = require('../models/listPhim.model');
const express = require('express');
const router = express.Router();

// CREATE new product
router.post('/create-list', (req, res) => {
    // console.log(req.body);
    if (req.body) {
        let model = new ListPhimModel(req.body);
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
router.get('/list-phim', (req, res) => {
    console.log(`list-product`);
    if (req.body) {
        ListPhimModel.find({}, (err, docs) => {
            if (err) {
                res.status(500).send('Can not get list products');
            }
            console.log(docs);
            res.status(200).send(docs)
        })
    } else {
        res.status(404).send('Something went wrong');
    }
});
// // UPDATE phim
router.put('/update-phim', (req, res) => {
    console.log(`update-product`);
    console.log(req.body._id);
    if (req.body) {
        ListPhimModel.findOneAndUpdate({
            _id: req.body._id
        }, req.body, {
                new: true
            })
            .then((doc) => {
                res.json(doc);
            })
            .catch((err) => {
                res.status(500).json(err);
            })

    } else {
        res.status(400).send('Something went wrong')
    }
})
// // DETELE
router.delete('/delete-phim/:id', (req, res) => {
    console.log(`delete-phim`);
    if (req.body) {
        if (req.params.id) {
            ListPhimModel.findOneAndDelete({
                _id: req.params.id
            })
            .then((doc) => {
                if (doc) {
                    res.json(doc);
                }else{
                    res.send('Not exist');
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            })
        } else {
            res.status(400).send('Missing id params')
        }
    } else {
        res.status(400).send('Something went wrong')
    }
})
module.exports = router;

