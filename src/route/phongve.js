const PhongVeModel = require('../models/phongve.model');
const express = require('express');
const router = express.Router();

// CREATE new product
router.post('/create-room', (req, res) => {
    // console.log(req.body);
    if (req.body) {
        let model = new PhongVeModel(req.body);
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
router.get('/list-room', (req, res) => {
    console.log(`list-product`);
    if (req.body) {
        ProductModel.find({}, (err, docs) => {
            if (err) {
                res.status(500).send('Can not get list products');
            }
            // let phims = [];
            // docs[0].list.map((doc) => {
            //     phims.push(doc)
            // });
            // res.status(200).send(phims);
            console.log(docs[0].list);
            res.status(200).send(docs[0].list)
        })
    } else {
        res.status(404).send('Something went wrong');
    }
});

module.exports = router;