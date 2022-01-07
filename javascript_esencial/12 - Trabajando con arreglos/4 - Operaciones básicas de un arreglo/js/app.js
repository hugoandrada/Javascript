"use strict"

//********************************
//*** Operaciones básicas de un arreglo

var platillos = ["ceviche", "tacos", "pasta"];

console.log('Antes:', platillos);

// ingresa un elemento al arreglo
platillos.push("Tostadas");
platillos.push("Queso");


// elimina el ultimo elemento del arreglo
platillos.pop();

// retorna todos los elementos como una cadena de texto
var mensaje = platillos.join();
console.log( mensaje);

console.log('Después:', platillos);