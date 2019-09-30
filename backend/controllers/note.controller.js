var Note = require('../models/note.model');

exports.add = function(req, res) {    
    // check username & pass isEmpty
    if (!req.body.name.title) {
        return res.status(400).send({
            message: "Group name not empty!"
        })
    }

    // create a not
    var note = new Note();
    note.title = req.body.name.title;
    note.idGroup = req.body.name.idGroup;
    note.content = req.body.name.content;

    // save to database
    note.save()
        .then(value => {
            console.log("create note successfully!");
            res.send(value);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating note!"
            })
        })
}

exports.loadAllNote = function(req, res) {
    Note.find({idGroup: req.params.idGroup})
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

exports.loadNote = function(req, res) {
    console.log("co vao day khong, ", req.params)
    Note.find({idGroup: req.params.idGroup, _id:req.params.id})
        .then(data => {
            console.log("at load note: ", data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating user!"
            })
        })
}

exports.update = function(req, res) {
    console.log("vao update r ne: ", req.body)
    if (!req.body.id && !req.body.idGroup) {
        return res.status(400).send({
            message: "Bad request!"
        })
    }

    Note.findOneAndUpdate({_id: req.body.id, idGroup: req.body.idGroup}, {title: req.body.title, content: req.body.content},  {new: true})
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
    console.log(req.body)
    if (!req.body.id && !req.body.idGroup) {
        return res.status(400).send({
            message: "Can't find this note!"
        })
    }

    Note.findOneAndDelete({_id: req.body.id.id, idGroup: req.body.id.idGroup})
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

