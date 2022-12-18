const express = require('express');
const authenticate = require('../middleWare/authenticate');
const BlogModel = require('../models/blogSchema');
const router = express.Router();

router.get('/blogpost', function(req, res){
    res.send("This is the blogPost Page")
});


router.post('/blogpost', async function (req, res) {

    try {
        const { name, regno, title, image, sub_title_1, content_1, sub_title_2, content_2, sub_title_3, content_3 } = req.body;

        if (!name || !regno || !title || !image || !sub_title_1 || !content_1 || !sub_title_2 || !content_2) {
            res.status(400).json({ error: "Please fill all the fields" })
        }

        const blog = new BlogModel({
            name,
            regno,
            title,
            sub_title_1,
            content_1,
            sub_title_2,
            content_2,
            sub_title_3,
            content_3,
            image
        });

        const blogData = await blog.save();
        console.log(blogData);

        if (blogData) {
            res.status(200).json({ message: "Blog Posted Successfully" });
            console.log("Data saved successfully in backend")
        } else {
            res.status(500).json({ error: "Blog not post failed." })
            console.log("Data not saved successfully on the backend");
        }

    } catch (error) {
        console.log('This is the error : ' + error);
    }

})


module.exports = router;