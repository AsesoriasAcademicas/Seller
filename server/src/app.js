var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
var app = express();
var routes = require('./routes/employes.routes');
var routesProducto = require('./routes/productos.routes');
var routesPersona = require('./routes/personas.routes');
var routerVenta = require('./routes/ventas.routes');

//enviroments variables
app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// definimos la ruta de la pagina home
// definimos el prefijo /api/amployees para todas las rutas
app.use('/api/employees', routes);
app.use('/api/productos', routesProducto);
app.use('/api/personas', routesPersona);
app.use('/api/ventas', routerVenta);

module.exports = app;