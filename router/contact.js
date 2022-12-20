const express = require('express');
const ContactModel = require('../models/contactSchema');
const router = express.Router();


// router.get('/contact', function(req, res){
//     res.send('Router is working fine in the contactpage.');
// })

router.post('/contact', async function(req, res){
    try {
        const {name, email, purpose, date, message} = req.body;

        if (!name || !email || !purpose || !message){
            res.status(400).json({error : "Please fill all the fields."})
        }

        const c1 = new ContactModel({
            name,
            email,
            purpose,
            date,
            message
        })

        const contactData  = await c1.save();
        console.log(contactData);

        if(contactData){
            res.status(200).json({message : "Message Send Successfully"});
        } else {
            res.status(500).json({error : "Message Send Failed"})
        }

    } catch (error) {
        console.log(error);
    }
})


module.exports = router;