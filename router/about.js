const express = require('express');
const router = express.Router();

router.get('/about', function(req, res){
    res.send('Router is working fine in the aboutpage.');
})


module.exports = router;