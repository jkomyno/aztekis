var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Game = new Schema({
    mainland: String,
    created_at: Date,
    game_specs: {
    	game_name: String,
    	highest_score: Number,
    	classific: Number
    },
    device_specs: String
});

module.exports = mongoose.model('game', Game);