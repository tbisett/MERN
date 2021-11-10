const mongoose = require('mongoose');
const ColloquiumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [false, "{PATH} must be present"],
        minlength: [2, "{PATH} must contain at least 2 characters"]
    },
    userName: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must contain at least 2 characters"]

    },
    message: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [1, "{PATH} must contain at least 2 characters"]

    }

}, { timestamps: true })

module.exports.Colloquium = mongoose.model('Colloquium', ColloquiumSchema);