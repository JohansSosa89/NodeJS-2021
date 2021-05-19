const Tarea = require('./tarea');
require('colors');

class Tareas{
    _listado = { }

    constructor() {
        this._listado = {};
    }

    get ListadoArr(){

        const result = [];

        Object.keys(this._listado).forEach( key =>{
            result.push(this._listado[key]);
        });

        return result;
    }

    cargarTareas(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(descripcion = ''){
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }

    listarTareas(){
        let result = '';

        this.ListadoArr.forEach(({description, completadoEn}, idx) => {
            result += `${(idx + 1).toString().green} ${description} :: ${completadoEn ? 'Completada'.green : 'Pendiente'.red}\n`
        });

        return result;
    }

    listarTareasPorStatus(completadas = true){
        let result = '';
        let tareasFiltradas = [];

        if(completadas){
            tareasFiltradas = this.ListadoArr.filter(tarea => tarea.completadoEn);
        }
        else{
            tareasFiltradas = this.ListadoArr.filter(tarea => !tarea.completadoEn);
        }
       
        tareasFiltradas.forEach(({description, completadoEn}, idx) => {
            result += `${((idx + 1) + '.').green} ${description} :: ${completadoEn ? 'Completada'.green + ' el ' + completadoEn.blue : 'Pendiente'.red}\n`
        });

        return result;
    }

    borrarTarea(id){

        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    completarTareas(ids = []){

        ids.forEach(id => {

            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.ListadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;