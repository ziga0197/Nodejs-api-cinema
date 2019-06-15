const CommentModel = require('../models/binhluan.model');
const express = require('express');
const router = express.Router();

// CREATE new comment
router.post('/create-comment', (req, res) => {
    // console.log(req.body);
    if (req.body) {
        let model = new CommentModel(req.body);
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
// // GET all comment
router.get('/:id', (req, res) => {
    if (req.body) {
        CommentModel.find({
            MaPhim: req.params.id
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
