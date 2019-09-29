var Group = require('../models/group.model');

exports.add = function(req, res) {
    // check username & pass isEmpty
    if (!req.body.name) {
        return res.status(400).send({
            message: "Group name not empty!"
        })
    }

    // create a not
    var group = new Group();
    group.name = req.body.name;

    group.save()
        .then(value => {
            console.log("create group successfully!");
            res.send(value);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating group!"
            })
        })
}

exports.loadAll = function(req, res) {
    Group.find()
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating user!"
            })
        })
}

exports.update = function(req, res) {
    console.log(req.body)
    if (!req.body.name) {
        return res.status(400).send({
            message: "Group name not empty!"
        })
    }

    Group.findByIdAndUpdate(req.body._id, {name: req.body.name},  {new: true})
        .then(data => {
            if (!data || data.length === 0) {
                return res.status(400).send({
                    message: "update successful!"
                })
            }
            console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating group!"
            })
        })
}

exports.delete = function(req, res) {
    console.log("hanh")
    console.log(req.body)
    if (!req.body.id) {
        return res.status(400).send({
            message: "Group name not empty"
        })
    }

    Group.findByIdAndDelete(req.body.id)
        .then(data => {
            if (!data) {
                return res.status(400).send({
                    message: "Delete cant"
                })
            }

            console.log(data);
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating user!"
            })
        })
}

