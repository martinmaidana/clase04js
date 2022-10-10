// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "Tincho",
    apellido:"Melon",
    edad: 35,
    altura: 175,
    eresDesarrollador: true,
}
console.log(datosPersonales);
// - Una variable que obtenga tu edad a partir del objeto anterior

const edad1 = "edad";
console.log("La edad de Tincho es",datosPersonales[edad1]);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// const arr = Object.keys(datosPersonales).map(function (key) {return [String(key), datosPersonales[key]];});
// console.log(arr);

const amigos = [  {
    nombre: "Tincho",
    apellido:"Melon",
    edad: 35,
    altura: 175,
    eresDesarrollador: true,
},
    {
    nombre: "lorena",
    apellido:"melano",
    edad: 34,
    altura: 175,
    eresDesarrollador: false,
}, {
    nombre: "paloma",
    apellido:"zambacilio",
    edad: 36,
    altura: 171,
    eresDesarrollador: false,
}]
console.log(amigos);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor



amigos.sort((a,b) => a.edad- b.edad);
console.log(amigos);

GeolocationCoordinates