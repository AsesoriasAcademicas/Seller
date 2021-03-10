var express = require('express');
var routerPersona = express.Router();
var personaController = require('../controllers/personas.controller');

routerPersona.get('/', personaController.getPersonas);

routerPersona.post('/', personaController.createPersona);

routerPersona.get('/:id', personaController.getPersona);

routerPersona.put('/:id', personaController.updatePersona);

routerPersona.delete('/:id', personaController.deletePersona);

module.exports = routerPersona;