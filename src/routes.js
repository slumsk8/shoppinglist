const ProductController = require('./app/controllers/ProductController')

const routes = require('express').Router()

routes.post('/products', ProductController.create)
routes.get('/products', ProductController.getProducts)
routes.get('/product/:id', ProductController.getProductById)

// Implementar rotas de update e delete dos produtos.


module.exports = routes
