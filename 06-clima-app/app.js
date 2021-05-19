const { inquirerMwenu, pausa } = require('./helpers/inquirer');

const main = async() =>{

    let option;
    
    do {

        option = await inquirerMwenu();

        switch (option) {
            case 1:
                console.log('Buscar ciudad');
                break;
            
            case 2:
                console.log('historial');
                break;
        
            default:
                break;
        }

        await pausa();
        
    } while (option !== 0);
};

main();