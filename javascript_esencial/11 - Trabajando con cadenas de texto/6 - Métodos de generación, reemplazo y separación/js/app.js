"use strict"

//********************************
//*** Métodos de generación, reemplazo y separación

var mensaje = "      Estoy aprendiendo JavaScript        ";

var resultado;

// repeat
// vamos a repetir n cantidad de veces
resultado = mensaje.repeat(20);


// replace
// buscar una cadena de texto y remplazar
// no afecta el valor original
resultado = mensaje.replace("JavaScript", "a programar");


// slice
// cortar el string
resultado = mensaje.slice(6);
resultado = mensaje.slice(6, 11)


// split
// separa la cadena en un arreglo
resultado = mensaje.split(" ");

// trim
// eliminar espacios en blanco en la cadena
resultado = mensaje.trim();

console.log(resultado);
