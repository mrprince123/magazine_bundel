require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();


// Serve the React app's build directory as static files
app.use(express.static(path.join(__dirname, './client/build')));

// Set up a route to serve the index.html file for any unknown paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});




// Parse request body as JSON
app.use(express.json());

// Parse cookies
app.use(cookieParser());

// Use session middleware
app.use(
  session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false,
  })
);

// Connect to database
require('./DB/conn');

// Define routes
app.use(require('./router/auth'));
app.use(require('./router/blog'));
app.use(require('./router/blogpost'));
app.use(require('./router/about'));
app.use(require('./router/home'));
app.use(require('./router/contact'));


// if(process.env.NODE_ENV == "production"){
//   app.use(express.static("client/build"));
// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
