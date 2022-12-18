const mongoose = require('mongoose');
const url = process.env.URL;

mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database is successfully connected');
}).catch((err) => {
    console.log(`This is the error : ${err}`);
})