const express = require('express');
const BlogModel = require('../models/blogSchema');
const authenticate = require('../middleWare/authenticate');
const router = express.Router();


router.get('/blog',  authenticate, function (req, res) {
    BlogModel.find({}, function (err, result) {
        if (err) {
            res.send("This error returend when we ask for blog data" + err);
        } else {
            res.send(result);
            console.log(result);
        }
    })
})

module.exports = router;


