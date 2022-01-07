"use strict"

//********************************
//*** Generación de arreglos con split() from() y of()
//--- split()

var mensaje = "ceviche, tacos, pasta";

var platillos = mensaje.split(', ');

//--- Array.from();
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'))

// usar el metodo map para recorrer cada elemento
var platillos = platillosHTML.map( platillo => platillo.textContent )


//--- Array.of();
var platillos = Array.of("ceviche", "tacos", "pasta");

console.log(platillos)