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

const getSalarioEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(sal => sal.id === id);
        (salario) ? resolve(salario): reject(`El empleado con Id ${id} no tiene salario asociado`);
    });
};

const id = 5;

const getInfoUsuario = async(id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalarioEmpleado(id);
        return `El empleado ${empleado.Nombre} tiene un salario de USD ${salario.monto}`;
    } catch (error) {
        throw error;
    }

};

getInfoUsuario(id)
    .then(result => console.log(result))
    .catch(error => console.log(error));