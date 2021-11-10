
const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must have at least 2 characters"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [5, "{PATH} must have at least 5 characters"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} must be present"],
    },
    genre: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must have at least 2 characters"]
    },
    important: {
        type: Boolean,
        required:[false],
        default: false
    }
}, { timestamps: true });

module.exports.Game = mongoose.model('Game', GameSchema);
