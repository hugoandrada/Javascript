"use strict"

//********************************
//*** Operadores Lógicos
// evaluar la condicion de dos o mas valores
// devuelve un valor booleano

var datoA = 10;
var datoB = 20;

// OPERADOR Y o AND - &&
var and = (datoA > 10 && datoB > 10) // false
console.log('El resultado de la evaluación AND es: ' + and);

// OPERADOR O u OR - ||
var or = (datoA > 10 || datoB > 10); // true
console.log('El resultado de la evaluación OR es: ' + or);

// OPERADOR DE NEGACIÓN o NOT - !
var not = !(datoA > 10) // true
console.log('El resultado de la evaluación NOT es: ' + not);

