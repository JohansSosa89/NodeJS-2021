const colors = require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMwenu, pausa, leerInput, listadoTareasPorBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async () => {

    let option = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareas(tareasDB);   
    }

    do {

        option = await inquirerMwenu();
        
        switch (option) {
            case '1':
                const descripcion = await leerInput('Descripcion: ');
                tareas.crearTarea(descripcion);
                break;
            
            case '2':
                console.log(tareas.listarTareas());
                break;

            case '3':
                console.log(tareas.listarTareasPorStatus());
                break;

            case '4':
                console.log(tareas.listarTareasPorStatus(false));
                break;

            case '5':
                const ids = await mostrarListadoCheckList(tareas.ListadoArr);
                tareas.completarTareas(ids);
                break;

            case '6':
                const id = await listadoTareasPorBorrar(tareas.ListadoArr);
                
                if(id !== '0'){
                    if(borrarTarea){
                        const borrarTarea = await confirmar('¿Esta seguro de borrar la tarea? ');
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
                break;
        
            default:
                break;
        }

        guardarDB(tareas.ListadoArr);

        await pausa();

    } while (option !== '0');

}

main();