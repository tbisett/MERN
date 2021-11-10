
const { Project } = require('../models/colloquium.models');

module.exports.createUser = (request, response) => {
    const { name } = request.body;
    Project.create({
        name
    })
        .then(User => response.json(User))
        .catch(err => response.status(400).json(err));
}

module.exports.getUsers = (request, response) => {
    Project.find().sort({'name': 1})
        .then(Users => response.json(Users))
        .catch(err => response.status(400).json(err))
}

module.exports.findUser = (request, response) => {
    Project.findOne({_id:request.params.id})
        .then(User => response.json(User))
        .catch(err => response.status(400).json(err))
}

module.exports.updateUser = (request, response) => {
    Project.findOneAndUpdate({id: request.params.id}, request.body, {new: true})
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteUser = (request, response) => {
    Project.findByIdAndDelete(request.params.id)
        .then(deletedUser => response.json(deletedUser))
        .catch(err => response.status(400).json(err))
}