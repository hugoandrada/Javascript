"use strict"

//********************************
//*** Métodos búsqueda | Parte 3
// son sensibles a mayusculas y minusculas
// devuelven un valor booleano

var mensaje = "Estoy aprendiendo JavaScript";
var resultado;

// startsWith
// si comienza con:
resultado = mensaje.startsWith("es");

var textoEn =  mensaje.indexOf("JavaScript")
resultado = mensaje.startsWith("Ja", textoEn);

// endsWith
// si termina con:
resultado = mensaje.endsWith("JavaScript");

// includes
// si esta o no incluido
resultado = mensaje.includes("Estoy", 6);

console.log(resultado);