var mongoose = require('mongoose');

var note = mongoose.Schema({
    idGroup: {type: String, require: true},
    id: {type: String, require: true},
    title: {type: String, required: true},
    content: {type: String, require: false}
});

var Note = module.exports = mongoose.model('note', note);