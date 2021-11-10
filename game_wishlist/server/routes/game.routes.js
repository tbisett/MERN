
const gameController = require('../controllers/game.controller');

module.exports = function(app) {
    app.get('/api/games', gameController.getGames);
    app.post('/api/games', gameController.createGame);
    app.get('/api/games/:id', gameController.findGame);
    app.put('/api/games/:id', gameController.updateGame);
    app.delete('/api/games/:id', gameController.deleteGame);
}