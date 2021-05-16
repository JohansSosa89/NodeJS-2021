const { crearArchivoTablaMultiplicar } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

//console.log(argv);

crearArchivoTablaMultiplicar(argv.b, argv.h, argv.l).then(nombreArchivo => {
    console.log(`${nombreArchivo.rainbow} creado`);
}).catch(error => {
    console.log("Hubo un error: ".bgRed, error);
});