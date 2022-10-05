// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let alturaEntero = 185;

// - Una variable que contenga tu altura en metros (número de coma flotante)

let alturaDecimal= 1.85;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

let pesoDecimal= 75.3;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeoHaciaArriba= Math.ceil(alturaDecimal);
console.log(alturaRedondeoHaciaArriba);
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let pesoRedondeoHaciaAbajo = Math.round(pesoDecimal);
console.log(pesoRedondeoHaciaAbajo);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let max_valor_JS = 2** 1023
console.log(max_valor_JS);