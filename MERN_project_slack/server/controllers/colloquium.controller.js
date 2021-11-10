
const { Colloquium } = require('../models/colloquium.model');

module.exports.createMessage = (request, response) => {
    const { name, userName, message } = request.body;
    Colloquium.create({
        name,
        userName,
        message
    })
        .then(message => response.json(message))
        .catch(err => response.status(400).json(err));
}

module.exports.getMessages = (request, response) => {
    Colloquium.find()
        .then(messages => response.json(messages))
        .catch(err => response.status(400).json(err))
}

module.exports.findMessage = (request, response) => {
    Colloquium.findOne({_id:request.params.id})
        .then(message => response.json(message))
        .catch(err => response.status(400).json(err))
}

module.exports.updateMessage = (request, response) => {
    Colloquium.findOneAndUpdate({id: request.params.id}, request.body, {new: true})
        .then(updatedMessage => response.json(updatedMessage))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteMessage = (request, response) => {
    Colloquium.findByIdAndDelete(request.params.id)
        .then(deletedMessage => response.json(deletedMessage))
        .catch(err => response.status(400).json(err))
}