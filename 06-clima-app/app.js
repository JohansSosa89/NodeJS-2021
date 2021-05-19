require('dotenv').config();
const { inquirerMwenu, pausa, leerInput, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() =>{

    let option;
    const busquedas = new Busquedas();
    
    do {

        option = await inquirerMwenu();

        switch (option) {
            case 1:
                //Mostar mensaje
                const ciudadConsultada = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(ciudadConsultada);
                const idSeleccionado = await listarLugares(lugares);
                
                if(idSeleccionado === '0') continue;
                
                const { nombre, lat, lng } = lugares.find(lugar => lugar.id === idSeleccionado);

                busquedas.agregarHistorial(nombre);

                const { temp, min, max, desc } = await busquedas.climaLugar(lat, lng);
                //Buscar los lugares

                //Seleccionar el lugar

                //Datos del clima 

                //Mostrar resultados;
                console.clear()
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', nombre.green);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
                console.log('Temperatura:', temp);
                console.log('Mínima:', min);
                console.log('Máxima:', max);
                console.log('Estado del clima:', desc.green)

                break;
            
            case 2:
                let result = '';
                busquedas.historialCapitalizado.forEach((lugar, idx) => {
                    result += `${((idx + 1) + '.').green} ${lugar}\n`;
                });

                console.log(result);
                break;
        
            default:
                break;
        }

        if(option !== 0) await pausa();
        
    } while (option !== 0);
};

main();