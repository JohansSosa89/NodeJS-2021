const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Toma la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Indica el hasta que numero va a multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }

        if(isNaN(argv.h)){
            throw 'El limite tiene que ser un numero';
        }

        return true;
    })
    .argv;


module.exports = argv;