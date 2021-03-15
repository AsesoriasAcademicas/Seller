var ventas = {};
var Venta = require('../models/Venta');
var Producto = require('../models/Producto');

ventas.getVentas = async(req, res) => {
    try {
        await Venta.find().populate('producto').exec((err, ventas) => {
            if (res.status(200)) {
                res.status(200).json(ventas);
            }
        });
    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al obtener la venta'
            });
        } else if (res.status(404)) {
            res.status(404).send({
                status: "404",
                message: 'El recurso pedido no existe'
            });
        } else if (res.status(403)) {
            res.status(403).send({
                status: "403",
                message: 'El cliente no tiene permiso para acceder al recurso solicitado'
            });
        } else if (res.status(401)) {
            res.status(401).send({
                status: "401",
                message: 'No autorizado: el cliente no pudo autenticarse con el servidor'
            });
        } else if (res.status(400)) {
            res.status(400).send({
                status: "400",
                message: 'Solicitud incorrecta: el cliente envió una solicitud no válida, falta de un cuerpo o parámetro de solicitud requerido'
            });
        }
    }
};

ventas.createVenta = async(req, res) => {
    try {
        var newVenta = new Venta();
        var { cantidad, precioTotal } = new Venta(req.body);
        newVenta.cantidad = cantidad;
        newVenta.precioTotal = precioTotal;
        var producto = await Producto.findOne({ '_id': req.params.id });
        newVenta.producto = producto;
        await newVenta.save();
        producto.stock = producto.stock - newVenta.cantidad;
        await Producto.findByIdAndUpdate(req.params.id, { "stock": producto.stock });
        if (res.status(200)) {
            res.status(200).send({
                status: "200",
                message: 'Venta creada'
            });
        }

    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al crear la venta'
            });
        } else if (res.status(404)) {
            res.status(404).send({
                status: "404",
                message: 'El recurso pedido no existe'
            });
        } else if (res.status(403)) {
            res.status(403).send({
                status: "403",
                message: 'El cliente no tiene permiso para acceder al recurso solicitado'
            });
        } else if (res.status(401)) {
            res.status(401).send({
                status: "401",
                message: 'No autorizado: el cliente no pudo autenticarse con el servidor'
            });
        }
    }
};

ventas.getVenta = async(req, res) => {
    try {
        var venta = await Venta.findById(req.params.id);
        if (res.status(200)) {
            res.status(200).json(venta);
        }

    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al obtener la venta'
            });
        } else if (res.status(404)) {
            res.status(404).send({
                status: "404",
                message: 'El recurso pedido no existe'
            });
        } else if (res.status(403)) {
            res.status(403).send({
                status: "403",
                message: 'El cliente no tiene permiso para acceder al recurso solicitado'
            });
        } else if (res.status(401)) {
            res.status(401).send({
                status: "401",
                message: 'No autorizado: el cliente no pudo autenticarse con el servidor'
            });
        } else if (res.status(400)) {
            res.status(400).send({
                status: "400",
                message: 'Solicitud incorrecta: el cliente envió una solicitud no válida, falta de un cuerpo o parámetro de solicitud requerido'
            });
        }
    }
};

ventas.updateVenta = async(req, res) => {
    try {
        await Venta.findByIdAndUpdate(req.params.id, req.body);
        if (res.status(200)) {
            res.status(200).send({
                status: "200",
                message: 'Venta actualizada'
            });
        }
    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al actualizar la venta'
            });
        } else if (res.status(404)) {
            res.status(404).send({
                status: "404",
                message: 'El recurso pedido no existe'
            });
        } else if (res.status(403)) {
            res.status(403).send({
                status: "403",
                message: 'El cliente no tiene permiso para acceder al recurso solicitado'
            });
        } else if (res.status(401)) {
            res.status(401).send({
                status: "401",
                message: 'No autorizado: el cliente no pudo autenticarse con el servidor'
            });
        } else if (res.status(400)) {
            res.status(400).send({
                status: "400",
                message: 'Solicitud incorrecta: el cliente envió una solicitud no válida, falta de un cuerpo o parámetro de solicitud requerido'
            });
        }
    }
};

ventas.deleteVenta = async(req, res) => {
    try {
        var venta = await Venta.findById(req.params.id);
        var producto = await Producto.findOne({ '_id': venta.producto });
        producto.stock = producto.stock + venta.cantidad;
        await Producto.findByIdAndUpdate(producto.id, { "stock": producto.stock });
        await Venta.findByIdAndDelete(req.params.id);
        res.status(200).send({
            status: "200",
            message: 'Venta eliminada'
        });
    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al eliminar la venta'
            });
        } else if (res.status(404)) {
            res.status(404).send({
                status: "404",
                message: 'El recurso pedido no existe'
            });
        } else if (res.status(403)) {
            res.status(403).send({
                status: "403",
                message: 'El cliente no tiene permiso para acceder al recurso solicitado'
            });
        } else if (res.status(401)) {
            res.status(401).send({
                status: "401",
                message: 'No autorizado: el cliente no pudo autenticarse con el servidor'
            });
        } else if (res.status(400)) {
            res.status(400).send({
                status: "400",
                message: 'Solicitud incorrecta: el cliente envió una solicitud no válida, falta de un cuerpo o parámetro de solicitud requerido'
            });
        }
    }
};
module.exports = ventas;