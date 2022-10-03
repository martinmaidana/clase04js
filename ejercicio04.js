// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre
let nombre = " MARTIN  ";
console.log(nombre);

// - Otra cadena de texto con tu Apellido
let apellido = " Maidanoski  ";
console.log(apellido);

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = nombre + " " + apellido;
console.log(estudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let espacios = estudiante.length
console.log(espacios)

// - Una variable que contenga la primera letra del Nombre
let primerCaracter = nombre.charAt(0);
console.log(primerCaracter);

// - Otra variable que contenga la última letra del Apellido

let ultimoCaracter = apellido.charAt(apellido.length -1);
console.log(ultimoCaracter);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminarEspacios = estudiante.trim().length;
console.log(eliminarEspacios);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let contenido = "";
if (estudiante.includes(`${nombre}`) ){
    console.log(`estudiante contiene ${nombre}`);
}else{
    console.log(`estudiante NO contiene ${nombre}`);
}


//fin