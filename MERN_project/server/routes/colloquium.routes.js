const projectController = require('../controllers/colloquium.controller');

module.exports = function(app) {
    app.get('/api/users', projectController.getUsers);
    app.post('/api/users', projectController.createUser);
    app.put('/api/users/:id', projectController.updateUser);
    app.get('/api/users/:id', projectController.findUser);
    app.delete('/api/users/:id', projectController.deleteUser);
}