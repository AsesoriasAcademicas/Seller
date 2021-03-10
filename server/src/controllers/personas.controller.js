var personas = {};
const Employe = require('../models/Employe');
var Persona = require('../models/Persona');

personas.getPersonas = async(req, res) => {
    try {
        var personas = await Persona.find();
        if (res.status(200)) {
            res.status(200).json(personas);
        }

    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al obtener la persona'
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

personas.createPersona = async(req, res) => {
    //Bloque try-catch para el manejo de errores en Express
    //Se manejan los principales codigos que pueden presentarse : 200, 500, 404, 403, 401
    try {
        var newPersona = new Persona(req.body);
        await newPersona.save();
        if (res.status(200)) {
            res.status(200).send({
                status: "200",
                message: 'Persona creada'
            });
        }

    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al crear la persona'
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

personas.getPersona = async(req, res) => {
    //Employee.findOne({ _id: req.params.id });
    try {
        var persona = await Persona.findById(req.params.id);
        if (res.status(200)) {
            res.status(200).json(persona);
        }

    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al obtener la persona'
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

personas.updatePersona = async(req, res) => {
    try {
        await Persona.findByIdAndUpdate(req.params.id, req.body);
        await Employe.findOne({ 'persona': req.params.id }).populate('persona').exec((err, empleadoUpdate) => {
            if (res.status(200)) {
                res.status(200).send(empleadoUpdate);
            }
        });
    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al actualizar la persona'
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

personas.deletePersona = async(req, res) => {
    try {
        await Persona.findByIdAndDelete(req.params.id);
        await Employe.findOne({ 'persona': req.params.id }).populate('persona').exec(async(err, empleado) => {
            await Employe.findByIdAndDelete(empleado._id);
        });
        res.status(200).send({
            status: "200",
            message: 'Persona eliminada'
        });
    } catch (error) {
        if (res.status(500)) {
            res.status(500).send({
                status: "500",
                message: 'Error al eliminar la persona'
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
module.exports = personas;