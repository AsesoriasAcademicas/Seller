var { Schema, model, version, isValidObjectId } = require("mongoose");

var personaSchema = new Schema({
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, require: true },
    email: { type: String, required: true },
    fechaNac: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('persona', personaSchema);