const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    },
    message: {
        type: String,
        required: true
    }
})

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;