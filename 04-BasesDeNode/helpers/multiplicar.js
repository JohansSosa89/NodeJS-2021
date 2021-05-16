const fs = require('fs');
const colors = require('colors');

const crearArchivoTablaMultiplicar = async(multiplo, limite, listar = false) => {

    try {

        let salida = '';
        let salidaConsola = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${multiplo} * ${i} = ${multiplo * i}\n`;
            salidaConsola += `${colors.yellow(multiplo)} * ${colors.blue(i)} = ${colors.red(multiplo * i)}\n`;
        }

        if(listar){
            console.log('======================='.green);
            console.log(` ${colors.green('Tabla del:')} ${colors.blue(multiplo)}`);
            console.log('======================='.green);

            console.log(salidaConsola);
        }

        fs.writeFileSync(`./salida/tabla-${multiplo}.txt`, salida);

        return `Tabla-${multiplo}.txt`;

    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivoTablaMultiplicar
}