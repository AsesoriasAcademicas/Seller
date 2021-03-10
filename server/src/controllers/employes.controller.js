var employes = {}
var Employee = require('../models/Employe');
var Persona = require('../models/Persona');

employes.getEmployees = async(req, res) => {
    var employees = await Employee.find();
    res.json(employees);
};

employes.createEmployes = async(req, res) => {
    var newEmpleado = new Employee(req.body);
    var persona = await Persona.findOne({ 'identificacion': req.params.id });
    newEmpleado.persona = persona;
    await newEmpleado.save();
    res.send({ message: 'Empleado creado' });
};

employes.getEmployes = async(req, res) => {
    //Employee.findOne({ _id: req.params.id });
    var employee = await Employee.findById(req.params.id);
    res.send(employee);
}

employes.updateEmployes = async(req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'Employee updated' });
}

employes.deleteEmployes = async(req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ status: 'Employee delete' });
}

module.exports = employes;