const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regno: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    sub_title_1: {
        type: String,
        required: true
    },
    content_1: {
        type: String,
        required: true
    },
    sub_title_2: {
        type: String,
        required: true
    },
    content_2: {
        type: String,
        required: true
    },
    sub_title_3: {
        type: String,
        required: false
    },
    content_3: {
        type: String,
        required: false
    }
})

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;