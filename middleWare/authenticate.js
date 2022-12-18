const jwt = require('jsonwebtoken');
const User = require("../models/userSchema");


const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.CLIENT_SECRET);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) { throw new Error("User not Found") }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        return next();

    } catch (error) {
        res.status(401).send("Unauthorize : No token Provided");
        console.log(error);
    }
}

module.exports = authenticate;



// const jwt = require('jsonwebtoken');
// const User = require('../models/userSchema');

// const authenticate = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwtoken;
//     const verifyToken = jwt.verify(token, process.env.CLIENT_SECRET);
//     const rootUser = await User.findOne({
//       _id: verifyToken._id,
//       'tokens.token': token,
//     });

//     if (!rootUser) {
//       throw new Error('User not found');
//     }

//     req.token = token;
//     req.rootUser = rootUser;
//     req.userID = rootUser._id;
//     next();
//   } catch (error) {
//     res.status(401).send('Unauthorized: No token provided');
//     console.log(error);
//   }
// };

// module.exports = authenticate;
