/*--------------------------------------------------------------------*/
// mostrar el medio de transporte de acuerdo a la distancia a recorrer

var distancia = 2232;

if ( distancia < 1000){
  console.log("el transporte recomendado es: caminando");
} else if ( distancia > 1000 && distancia < 10000) {
  console.log("el transporte recomendado es: bicicleta");
} else if ( distancia > 10000 && distancia < 30000) {
  console.log("el transporte recomendado es: colectivo")
} else if ( distancia > 30000 && distancia < 100000 ) {
  console.log("el transporte recomendado es: auto");
} else {
  console.log("el transporte recomendado es: avion");
};
/*-------------------------------------------------------------------------*/
// obtener el numero mayor de un array

var numeros = [2,3,6,66,77,88,104,2];

// ejemplo uno usando el metodo reduce y Math
var max = numeros.reduce((acc,numero) => Math.max(acc, numero));
console.log("el numero mayor es: "+ max); 

// ejemplo dos usando el metodo Math y el operador spread
var numeroMayor = Math.max(...numeros);
console.log("el numeor mayor es: "+ numeroMayor);

