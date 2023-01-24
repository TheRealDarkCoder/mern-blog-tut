const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');

router.get('/blog', (req, res, next) => {
    Post.find({}, 'title author date')
    .then((data) => res.json(data))
    .catch(next);
});
  
router.get('/blog/:id', (req, res, next) => {
    Post.findById(req.params.id, 'title body author date')
    .then((data) => res.json(data))
    .catch(next);
});
  
router.post('/blog/create', (req, res, next) => {
    if (req.body.body) {
        Post.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
    } else {
        res.json({
            error: "The input field is empty",
        });
    }

});

router.patch('/blog/:id', (req, res, next) => {
    if (req.body.body) {
        Post.updateOne({_id: req.params.id}, {body: req.body.body})
        .then((data) => res.json(data))
        .catch(next);
    } else {
        res.json({
            error: "The input field is empty",
        });
    }
});

router.delete('/blog/:id', (req, res, next) => {
    Post.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;