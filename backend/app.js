var express = require('express');
var bodyParser = require('body-parser');
let mongoose = require('mongoose');
var cors = require('cors');

// module by hand
var apiRoutes = require('./routes/index');
// var user = require('./controllers/loginController');

var app = express(); // create an object of express module

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// use api routes in the app
app.use('/', apiRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/notedev', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

if (!db) {
    console.log("connect db error!");   
} else {
    console.log("Connect db successfully!");
}

const port = 3000;
app.listen(port, function() 
{
    console.log(`API running on port ${port}`);
})
