// AUTHOR CONTROLLER REQUIREMENT
const authorController = require('../controllers/author.controller');

// ALL ROUTES (BACKEND) FOR FULL CRUD(BETTER USE OF RESTFUL CONVENTION CAN BE USED)
module.exports = function(app){
    app.get('/api/authors', authorController.getAuthors);
    app.post('/api/authors', authorController.createAuthor);
    app.get('/api/authors/:id', authorController.findAuthor);
    app.put('/api/authors/update/:id', authorController.updateAuthor);
    app.delete('/api/authors/delete/:id', authorController.deleteAuthor);
}
