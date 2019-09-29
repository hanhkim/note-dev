var mongoose = require('mongoose');

var group = mongoose.Schema({
    name: {type: String, required: true}
});

var Group = module.exports = mongoose.model('group', group);