const express = require('express');
const passport = require('passport');
const UserModel = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const router = express.Router();


router.get("/logout", function (req, res) {
    console.log("Logout Page");
    res.clearCookie('jwtoken', { path: "/" })
    res.status(200).send("User Logout");
});


router.get('/login', function (req, res) {
    res.send('Router is working fine in the Loginpage.');
});


router.post('/login', async function (req, res) {

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Please fill all the fields" });
        }

        const userLogin = await UserModel.findOne({ email: email });
        console.log(userLogin);


        if (userLogin) {

            const isEmailMatch = await bcrypt.compare(email, userLogin.email);
            const isMatch = await bcrypt.compare(password, userLogin.password);

            // Token Generation Code
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                // Expire in 30 days from now.
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });


            if (isMatch || isEmailMatch) {
                res.status(200).json({ message: "User Login Successfully" });
            } else {
                res.status(400).json({ error: "User Login Failed" });
            }
        }

    } catch (error) {
        console.log("This is error : " + error);
    }
})



router.get('/register', function (req, res) {
    res.send('Router is working fine in the registerpage.');
})


router.post('/register', async function (req, res) {

    try {
        const { username, email, password, cpassword } = req.body;

        if (!username || !email || !password || !cpassword) {
            res.status(400).json({ error: "Please fill all the fields" });
        }

        const userExists = await UserModel.findOne({ email: email })

        if (userExists) {
            return res.status(400).json({ error: "This email is already registered with us" })
        } else if (password != cpassword) {
            return res.status(400).json({ error: "Password are not matching" })
        } else {
            const user = new UserModel({
                username,
                email,
                password,
                cpassword
            })

            const userData = await user.save();
            console.log(userData);

            if (userData) {
                res.status(200).json({ message: "User Register Successfully" });
            } else {
                res.status(400).json({ error: "User Registration Failed" });
            }
        }

    } catch (error) {
        console.log("This is error on register : " + error);
    }
})


module.exports = router;