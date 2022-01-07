"use strict"

//********************************
//*** Métodos búsqueda | Parte 1

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

// indexOf - encuentra la primera incidencia
resultado = mensaje.indexOf("aprendiendo");


// lastIndexOf - encuentra la ultima incidencia
resultado = mensaje.lastIndexOf("aprendiendo");


// search:
//resultado = mensaje.search("aprendiendo");


// search | Expresión regular
// el operador i lo convierte en casesensitive
resultado = mensaje.search(/ja/i);


console.log(resultado);