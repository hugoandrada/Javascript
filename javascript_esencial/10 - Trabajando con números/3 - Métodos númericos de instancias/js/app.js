"use strict"

//********************************
//*** Propiedades númericas de instancias

var numero = 2.5;

// numero exponencial
console.log("toExponential: ", numero.toExponential(4));

// ajuta los decimas 
console.log("toFixed: ", numero.toFixed(2));

console.log("toPrecision: ", numero.toPrecision(6));

// convierte el valor numerico a string
console.log("toString: ", typeof numero.toString());