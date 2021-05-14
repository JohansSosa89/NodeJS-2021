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
        monto: 1500
    },
    {
        id: 2,
        monto: 1000
    }
];

const empleadoId = 4;

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(emp => emp.id === id);
        (empleado) ? resolve(empleado): reject(`No existe un empleado con Id ${id}`);
    });
};

/*getEmpleado(empleadoId)
    .then(empleado => console.log(empleado))
    .catch(error => console.log(error));*/

const getSalarioEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(sal => sal.id === id);
        (salario) ? resolve(salario): reject(`El empleado con Id ${id} no tiene salario asociado`);
    });
};

/*getSalarioEmpleado(empleadoId)
    .then(salario => console.log(salario))
    .catch(error => console.log(error));*/

/*getEmpleado(empleadoId).then(empleado => {
    getSalarioEmpleado(empleadoId).then(salario => {
        console.log(`El empleado ${empleado.Nombre} tiene una salario de ${salario.monto}`);
    }).catch(error => console.log(error));
}).catch(error => console.log(error));*/

let nombre = "";

getEmpleado(empleadoId)
    .then(empleado => {
        nombre = empleado.Nombre;
        return getSalarioEmpleado(empleadoId)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario.monto}`))
    .catch(error => console.log(error));