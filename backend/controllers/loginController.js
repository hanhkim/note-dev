var User = require('../models/userRepo');

exports.findAll = function (req, res) {
    User.find()
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating user!"
            })
        })
};

// retrieve 1 user => using for post - login
exports.findOne = function (req, res) {
    User.find({username: req.body.username, password: req.body.password})
        .then(data => {
            if (!data || data.length === 0) {
                return res.status(400).send({
                    message: "Login failed! Username or Password wrong!"
                })
            }
            console.log(data)
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message: err.message || "Some error occurred while creating user!"
            })
        })
};

exports.add = function (req, res) {
    // check username & pass isEmpty
    if (!req.body.username || !req.body.password) {
        return res.status(400).send({
            message: "Username and Password not empty!"
        })
    }

    // create a not
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    user.save()
        .then(value => {
            console.log("create user successfully!");
            res.send(value);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating user!"
            })
        })
};

exports.edit = function (req, res) {
    
};

exports.delete = function (req, res) {

    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    return res.send(123)
};