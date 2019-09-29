// var db = require('../db/db');
var mongoose = require('mongoose');

// Setup schema
var user = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

// Export Contact model
var User = module.exports = mongoose.model('user', user);