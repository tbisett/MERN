const { response } = require('express');
const { Author } = require('../models/author.model')

// FUNCTION THAT CREATES A Author
module.exports.createAuthor = (request, response) => {
    const { Name, Age } = request.body;
    Author.create({
        Name,
        Age
    })
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}

module.exports.getAuthors = (request, response) => {
    Author.find({})
        .then(Authors => response.json(Authors))
        .catch(err => response.json(err))
}

module.exports.findAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(Author => response.json(Author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.findByIdAndDelete(request.params.id) 
        .then(results => response.json(results))
        .catch(err => response.json(err))
}