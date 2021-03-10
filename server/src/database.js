// incluímos la biblioteca mongoose
var mongoose = require('mongoose');

//Abrimos una conexión a una base de datos a la que he llamado mean-employees utilizando la función connect
mongoose.connect('mongodb://localhost/mean-employees', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(bd => console.log('BD is conected'))
    .catch(error => console.log(object))

/**
 *
 * Si se produce un error al conectarse a la base de datos, se lanza la excepción 
 * y se detiene todo el procesamiento posterior. Cuando no ocurre ningún error, 
 * he registrado un mensaje de éxito en la consola. 
 * 
 */