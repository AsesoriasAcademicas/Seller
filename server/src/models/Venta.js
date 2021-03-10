var { Schema, model, version } = require('mongoose');

var ventaSchema = new Schema({
    producto: { type: Schema.Types.ObjectId, ref: 'producto' },
    cantidad: { type: Number, require: true },
    precioTotal: { type: Number, require: true }

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('venta', ventaSchema);