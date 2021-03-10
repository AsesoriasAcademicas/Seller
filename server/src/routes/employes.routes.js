var express = require('express');
var router = express.Router();
var employescontroller = require('../controllers/employes.controller');

// respondemos con "hello world" cuando una peticion GET es hecha desde la pagina home
// funcion middleware con acceso al objeto de solicitud (req y al objeto de respuesta (res) 
// Middleware de nivel de direccionador enlazado a una instancia de express.Router()
router.get('/', employescontroller.getEmployees);

//Create
router.post('/:id', employescontroller.createEmployes);

//Read
router.get('/:id', employescontroller.getEmployes);

//Update
router.put('/:id', employescontroller.updateEmployes);

//Delete
router.delete('/:id', employescontroller.deleteEmployes);


module.exports = router;