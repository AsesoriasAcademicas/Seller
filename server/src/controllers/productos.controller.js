var productos = {};
var Producto = require('../models/Producto');

productos.getProductos = async(req, res) => {
    try {
        var productos = await Producto.find();
        if (res.status(200)) {
            res.status(200).json(productos);
        }

    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al obtener el producto'
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

productos.createProductos = async(req, res) => {
    try {
        var newProducto = new Producto(req.body);
        await newProducto.save();
        if (res.status(200)) {
            res.status(200).send({
                status: "200",
                message: 'Producto creado'
            });
        }

    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al crear el producto'
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

productos.getProducto = async(req, res) => {
    try {
        var producto = await Producto.findById(req.params.id);
        if (res.status(200)) {
            res.status(200).json(producto);
        }

    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al obtener el producto'
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

productos.updateProducto = async(req, res) => {
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        if (res.status(200)) {
            res.status(200).send({
                status: "200",
                message: 'Producto actualizado'
            });
        }
    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al actualizar el producto'
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

productos.deleteProducto = async(req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).send({
            status: "200",
            message: 'Producto eliminada'
        });
    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al eliminar el producto'
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
module.exports = productos;