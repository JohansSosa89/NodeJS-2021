const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            { value: 1, name: '1.'.green + ' Buscar ciudad' },
            { value: 2, name: '2.'.green + ' Historial' },
            { value: 0, name: '0.'.green + ' Salir' }
        ]
    }
];


const inquirerMwenu = async() => {
    
    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opción '.white);
    console.log('=======================\n'.green);

    const {opcion} = await inquirer.prompt(menuOptions);

    return opcion;
};

const pausa = async() => {

    const exitQuestion = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ]

    console.log('\n');
    await inquirer.prompt(exitQuestion);
}

const leerInput = async(mensaje) =>{
    const question = [
        {
            type: 'input',
            name: 'descripcion',
            message: mensaje,
            validate( value ){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }

                return true;
            }
        }
    ];

    const {descripcion} = await inquirer.prompt(question);

    return descripcion;
}

const listarLugares = async(lugares = []) =>{
    const choices = lugares.map((lugar, i) => {

        const idx = `${i + 1}.`.green;
        return {
            value: lugar.id,
            name: `${ idx } ${ lugar.nombre }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ];

    const { id } = await inquirer.prompt(questions);

    return id;
}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    
    return ok;
}

const mostrarListadoCheckList = async(tareas = []) =>{
    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.description }`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ];

    const { ids } = await inquirer.prompt(questions);

    return ids;
}

module.exports = {
    inquirerMwenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoCheckList
}