
const { Game } = require('../models/game.model');

module.exports.createGame = (request, response) => {
    const { title, description, price, genre, important } = request.body;
    Game.create({
        title,
        description,
        price,
        genre,
        important
    })
        .then(Game => response.json(Game))
        .catch(err => response.status(400).json(err));
}

module.exports.getGames = (request, response) => {
    Game.find({})
        .then(Game => response.json(Game))
        .catch(err => response.status(400).json(err))
}

module.exports.findGame = (request, response) => {
    Game.findOne({_id:request.params.id})
        .then(Game => response.json(Game))
        .catch(err => response.status(400).json(err))
}

module.exports.updateGame = (request, response) => {
    Game.findOneAndUpdate({_id:request.params.id}, request.body, {new: true, runValidators: true})
        .then(updatedGame => response.json(updatedGame))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteGame = (request, response) => {
    Game.findByIdAndDelete(request.params.id)
        .then(deletedGame => response.json(deletedGame))
        .catch(err => response.status(400).json(err))
}