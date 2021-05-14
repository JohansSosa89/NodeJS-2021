//CALLBACKS: Son funciones que se mandan como argumento a otra funcion

/*setTimeout(function() {
    console.log('Hola Mundo');
}, 1000);

setTimeout(() => {
    console.log('Hola funcion de flecha');
}, 1500);*/

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        callback(usuario);
    }, 2000)
};

/*getUsuarioById(25, () => {
    console.log('hola mundo');
});*/

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});