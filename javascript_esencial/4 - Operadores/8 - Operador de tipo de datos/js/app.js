"use strict"

//********************************
//*** Operador de tipo de datos
// comprobar el tipo de dato con el que
// estamos trabajando

var datoA = 10; // Número

var nombre = "Playa"; // Cadena de texto

var activo = true // Boleano

var persona = {
	edad: 34, // Número
	deporte: 'Correr' // Cadena de texto
} // Objeto

console.log(typeof datoA); // numero
console.log(typeof nombre); // string
console.log(typeof activo); // booleano

console.log(typeof persona); // object

console.log(typeof persona.edad); // number
console.log(typeof persona.deporte); // string