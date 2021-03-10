// Schema es lo que se guarda en mongodb
var { Schema, model, version, Mongoose } = require('mongoose');

//Este es un esquema muy básico que solo contiene 4 propiedades, se espesifica tipos y requered true. 
// timestamps gusrda el dato de creacion y actualización por última vez
// versionKey : false elimina el guion bajo _ del objeto

var empleadoSchema = new Schema({
    usuario: { type: String, required: true },
    contrasenia: { type: String, required: true },
    tipoEmpleado: { type: String, required: true },
    persona: { type: Schema.Types.ObjectId, ref: 'persona' }
}, {
    timestamps: true,
    versionKey: false
});

// model('modelo', schema)
module.exports = model('Employee', empleadoSchema);