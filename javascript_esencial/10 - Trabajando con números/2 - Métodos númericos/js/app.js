"use strict"

//********************************
//*** Métodos númericos

var numero = "10";

// convierte cadenas de texto a numero
console.log('Number: ', typeof numero, typeof Number(numero));

// convierte a un numero entero
console.log('parseInt: ',  parseInt(numero));

// convierte a un numero con decimales o punto flotante
console.log('parseFloat: ', Number.parseFloat(numero));

// evaluar si es un numero
console.log('isNaN: ', isNaN(numero));

// evalua si es un numero entero
console.log('isInteger: ', Number.isInteger(numero));