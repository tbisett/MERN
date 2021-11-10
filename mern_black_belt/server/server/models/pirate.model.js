
const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must have at least 2 characters"]
    },
    image: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must have at least 2 characters"]
    },
    treasure_chests: {
        type: Number,
        required: [true, "{PATH} must be present"],
        
    },
    catch_phrases: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must have at least 2 characters"]
    },
    crew_position: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must have at least 2 characters"]
    },
    peg_leg: {
        type: Boolean,
        required:[false],
        default: true
    },
    eye_patch: {
        type: Boolean,
        required:[false],
        default: true
    },
    hook_hand: {
        type: Boolean,
        required:[false],
        default: true
    }
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);
