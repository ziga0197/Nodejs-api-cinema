const PhongVeModel = require('../models/phongve.model');
const ListPhimModel = require('../models/listPhim.model');
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

router.get('/list-room', (req, res) => {
    if (req.body) {
        PhongVeModel.find({}, (err, docs) => {
            if (err) {
                res.status(500).send('Can not get list products');
            }
            // let phims = [];
            // docs[0].list.map((doc) => {
            //     phims.push(doc)
            // });
            // res.status(200).send(phims);
            console.log(docs[0]);
            res.status(200).send(docs[0]);
        })
    } else {
        res.status(404).send('Something went wrong');
    }
});

router.get('/:id', (req, res) => {
    if (req.body) {
        PhongVeModel.findOne({
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
// // UPDATE phong ve
router.put('/update-room', (req, res) => {
    console.log(req.body._id);
    if (req.body) {
        PhongVeModel.findOneAndUpdate({
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
router.delete('/delete-room/:id/:childId', (req, res) => {
    console.log(`delete-phim`);
    if (req.body) {
        if (req.params.id && req.params.childId) {
            console.log(req.params.id);
            console.log(req.params.childId);
            // xoa mang list phim
            ListPhimModel.update(
                { _id: req.params.id },
                { $pull: { 'LichChieu': { _id: req.params.childId } } }
            )
                .then((doc) => {
                    if (doc) {
                        res.json(doc);
                    } else {
                        res.send('update pulll fail');
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