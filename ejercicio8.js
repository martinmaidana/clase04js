// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function verdad (){
   return 1 === 1
}
console.log(verdad());


// let arr1 = [2,6,76,22]
// const arr2= arr1.map((valor) => valor/2)
// console.log(arr2);
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado


setTimeout(function promesas(){
   console.log("Hola soy una promesa");
}, 5000);
const dar = promesas();
console.log(dar);
// - Una función generadora de índices pares automáticos

function* generadoradepares(num){

 while(num <100){  
    
     yield num;
  num = num +2;
    if (num % 2 === 0 ){
      
      console.log("introdujiste un numero par", num); 
     
   
   } 
   else{
      
      console.log("metiste la pata", num );   
      
      
   }
}
  
}

const gen = generadoradepares(80);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
