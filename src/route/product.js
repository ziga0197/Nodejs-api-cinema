const ProductModel = require('../models/product.model');
const express = require('express');
const router = express.Router();

// CREATE new product
router.post('/product', (req, res) => {
    // console.log(req.body);
    if (req.body) {
        let model = new ProductModel(req.body);
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
router.get('/list-product', (req, res) => {
    console.log(`list-product`);
    if (req.body) {
        ProductModel.find({}, (err, docs) => {
            if (err) {
                res.status(500).send('Can not get list products');
            }
            let products = [];
            docs.map((doc) => {
                products.push(doc)
            });
            res.status(200).send(products);
        })
    } else {
        res.status(404).send('Something went wrong');
    }
});
// UPDATE product
router.put('/update-product/:id', (req, res) => {
    console.log(`update-product`);
    if (req.body) {
        if (req.params.id) {
            ProductModel.findByIdAndUpdate({
                _id: req.params.id
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
            res.status(400).send('Missing id params')
        }
    } else {
        res.status(400).send('Something went wrong')
    }
})
// DETELE
router.delete('/delete-product/:id', (req, res) => {
    console.log(`delete-product`);
    if (req.body) {
        if (req.params.id) {
            ProductModel.findByIdAndDelete({
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

