const empleados = [{
        id: 1,
        Nombre: 'Johan Sosa'
    },
    {
        id: 2,
        Nombre: 'Estefania Pernia'
    },
    {
        id: 3,
        Nombre: 'Luis Sosa'
    }
];


const salarios = [{
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 1000
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((emp) => emp.id === id);

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
};

const getSalarioEmpleado = (id, callback) => {
    const salarioEmpleado = salarios.find((emp) => emp.id === id);

    if (salarioEmpleado) {
        callback(null, salarioEmpleado);
    } else {
        callback(`El empleado con el id ${id} no tiene un salario asociado`);
    }
}

//console.log(getEmpleado(4));

const idEmpleado = 1;

getEmpleado(idEmpleado, (error, empleado) => {
    if (error) {
        console.log('ERROR!!');
        return console.log(error);
    }

    getSalarioEmpleado(idEmpleado, (error, salarioEmpleado) => {
        if (error) {
            return console.log(error);
        }

        console.log(`El empleado: ${empleado.Nombre} tiene un salario de: ${salarioEmpleado.salario}`);
    });
});