
const { Pirate } = require('../models/pirate.model');

module.exports.createPirate = (request, response) => {
    const { name, image, treasure_chests, catch_phrases, crew_position, peg_leg, eye_patch, hook_hand } = request.body;
    Pirate.create({
        name, 
        image,
        treasure_chests,
        catch_phrases,
        crew_position,
        peg_leg,
        eye_patch,
        hook_hand
    })
        .then(Pirate => response.json(Pirate))
        .catch(err => response.status(400).json(err));
}

module.exports.getPirates = (request, response) => {
    Pirate.find({})
        .then(Pirate => response.json(Pirate))
        .catch(err => response.status(400).json(err))
}

module.exports.findPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(Pirate => response.json(Pirate))
        .catch(err => response.status(400).json(err))
}


module.exports.deletePirate = (request, response) => {
    Pirate.findByIdAndDelete(request.params.id)
        .then(deletedPirate => response.json(deletedPirate))
        .catch(err => response.status(400).json(err))
}