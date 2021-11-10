
const pirateController = require('../controllers/pirate.controller');

module.exports = function(app) {
    app.get('/api/pirates', pirateController.getPirates);
    app.post('/api/pirates', pirateController.createPirate);
    app.get('/api/pirates/:id', pirateController.findPirate);
    app.delete('/api/pirates/:id', pirateController.deletePirate);
}