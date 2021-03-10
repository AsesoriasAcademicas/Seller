var express = require('express');
var routerVenta = express.Router();
var ventaController = require('../controllers/ventas.controller');

routerVenta.get('/', ventaController.getVentas);

routerVenta.post('/', ventaController.createVenta);

routerVenta.get('/:id', ventaController.getVenta);

routerVenta.put('/:id', ventaController.updateVenta);

routerVenta.delete('/:id', ventaController.deleteVenta);

module.exports = routerVenta;