var { schema, model, version, Schema } = require('mongoose');

var productoSchema = new Schema({
    codigo: { type: String, require: true },
    nombre: { type: String, require: true },
    detalle: { type: String, require: true },
    cantidad: { type: Number, require: true },
    precioUnitario: { type: Number, require: true },
    tipoVenta: { type: String, require: true }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Producto', productoSchema);