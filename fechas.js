// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaHoy = new Date()
console.log(fechaHoy);

// - La fecha de tu nacimiento
const fechaCumple = new Date(1898, 05, 22, 12, 45, 00);
console.log(fechaCumple);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
 console.log(fechaCumple > fechaHoy);

// - Una variable que contenga el día de tu nacimiento
//getdate()

const dia = fechaCumple.getDate()
console.log(dia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = fechaCumple.getMonth()
console.log(mes + 1);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const año = fechaCumple.getFullYear()
console.log(año);