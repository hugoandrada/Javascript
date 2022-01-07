"use strict"

//********************************
//*** Métodos de transformación

var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2 = " y programación";
var total = 123456;

var resultado;

// convierte un numero a texto
resultado = total.toString();

// convierte en minisculas
resultado = mensaje.toLowerCase();

// convierte a mayuscula
resultado = mensaje.toUpperCase();

// unir dos cadenas de texto
resultado = mensaje.concat(mensaje2, ' y tengo muchas ideas', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123');

console.log(resultado);