var express = require('express');
var routerProducto = express.Router();
var productoController = require('../controllers/productos.controller');

routerProducto.get('/', productoController.getProductos);

routerProducto.post('/', productoController.createProductos);

routerProducto.get('/:id', productoController.getProducto);

routerProducto.put('/:id', productoController.updateProducto);

routerProducto.delete('/:id', productoController.deleteProducto);

module.exports = routerProducto;