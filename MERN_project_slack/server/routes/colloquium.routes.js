const colloquiumController = require('../controllers/colloquium.controller');

module.exports = function(app) {
    app.get('/api/messages', colloquiumController.getMessages);
    app.post('/api/messages', colloquiumController.createMessage);
    app.put('/api/messages/:id', colloquiumController.updateMessage);
    app.get('/api/messages/:id', colloquiumController.findMessage);
    app.delete('/api/messages/:id', colloquiumController.deleteMessage);
}