// DECONSTRUCTING AUTHOR MODEL(DB) AND MAKING IT A REQUIREMENT

const { Author } = require('../models/author.model')

// FUNCTIONS FOR FULL CRUD, CAN ALSO MAKE THEM IN A SINGLE EXPORT OBJECT INSTEAD OF INDIVIDUAL EXPORTS

// FUNCTION THAT CREATES AN AUTHOR, DECONSTRUCTING DB ENTRIES(NAME, AGE) TO = REQUEST.BODY
// TODO: ADD RUNVALIDATORS 
module.exports.createAuthor = (request, response) => {
    const { Name, Age } = request.body;
    Author.create({
        Name,
        Age
    })
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}

// FUNCTION THAT GETS ALL AUTHORS IN DB
module.exports.getAuthors = (request, response) => {
    Author.find({})
        .then(Authors => response.json(Authors))
        .catch(err => response.status(400).json(err))
}

// FUNCTION THAT FINDS AN INDIVIDUAL AUTHOR(BY ID IN THIS CASE)
module.exports.findAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err))
}

// FUNCTION THAT UPDATES AN AUTHOR, PASS IN ID AND REQUEST.BODY SINCE WE MADE THE MODEL ENTRIES = REQUEST.BODY IN THE CREATE FUNCTION
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err))
}

// FUNCTION THAT DELETES AND AUTHOR VIA ID
module.exports.deleteAuthor = (request, response) => {
    Author.findByIdAndDelete(request.params.id) 
        .then(results => response.json(results))
        .catch(err => response.status(400).json(err))
}