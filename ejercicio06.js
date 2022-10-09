// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

let listaDeCompras = ["Sandia", "Mango", "Queso rallado", "Kale", "Asado"];
console.log(listaDeCompras);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

listaDeCompras.push("Aceite de Girasol");
listaDeCompras.unshift("Aceite de Girasol");
listaDeCompras.splice(0,0, "Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaDeCompras.pop();
listaDeCompras.shift();
listaDeCompras.splice(0,1)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

let peliculas = [ {
    titulo: "EL GRAN HOTEL BUDAPEST",
    director:"Wes Anderson",
    fecha: 2001, },
    {
    titulo: "MAGNOLIA",
    director:"Paul Thomas Anderson",
    fecha: 2019,
},
{
    titulo: "NOMADLAND",
    director:"Chloé Zhao",
    fecha: 2015,
},  

]
console.log(peliculas);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const peliculasPost= peliculas.filter(f => f.fecha >= 2010)
console.log(peliculasPost);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculas.map(d => d.director);
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = peliculas.map(t => t.titulo);
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const concatenando = directores.concat(titulos);
console.log(concatenando);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

console.log(...concatenando);
 const lista1= [...directores, ...titulos];
 console.log(lista1);