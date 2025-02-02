function setRoutes(app) {
    const IndexController = require('../controllers/index');
    const indexController = new IndexController();

    app.get('/items', indexController.getItems.bind(indexController));
    app.post('/items', indexController.createItem.bind(indexController));
}

module.exports = setRoutes;