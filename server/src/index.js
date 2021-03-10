require('./database')
var app = require('./app');

//La aplicación inicia un servidor y escucha las conexiones en el puerto 4000
app.listen(app.get('port'), function() {
    console.log('app listening on port ', app.get('port'));
});