
// MONGOOSE REQUIREMENT AND SCHEMA CREATION/MODEL 
// PATH GRABS THE KEY NAME
// REQUIRMENTS FOR ENTRIES/EDITS
const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    Name: { 
        type: String, 
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars "]},
    Age: { 
        type: Number,
        required: [true,"{PATH} must be present"],
        min: [18, "{PATH} must be older than 18"]},
    
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);


