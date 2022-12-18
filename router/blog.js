// const express = require('express');
// const BlogModel = require('../models/blogSchema');
// const authenticate = require('../middleWare/authenticate');
// const router = express.Router();


// router.get('/blog', authenticate, function (req, res) {
//     BlogModel.find({}, function (err, result) {
//         if (err) {
//             res.send("This error returend when we ask for blog data" + err);
//         } else {
//             res.send(result);
//         }
//     })
// })

// module.exports = router;


const express = require('express');
const BlogModel = require('../models/blogSchema');
const authenticate = require('../middleWare/authenticate');
const router = express.Router();

router.get('/blog', authenticate, async (req, res) => {
  try {
    const result = await BlogModel.find({});
    res.send(result);
  } catch (error) {
    res.status(500).send(`An error occurred when retrieving the blog data: ${error}`);
  }
});

module.exports = router;
