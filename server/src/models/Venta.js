var { Schema, model, version } = require('mongoose');

var ventaSchema = new Schema({
    cantidad: { type: Number, require: true },
    precioTotal: { type: Number, require: true },
    producto: { type: Schema.Types.ObjectId, ref: 'producto' }

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('venta', ventaSchema);