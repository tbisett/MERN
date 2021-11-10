const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must contain at least 2 characters"]
    }
}, { timestamps: true })

module.exports.Project = mongoose.model('Project', ProjectSchema);