"use strict"

//********************************
//*** Buscando en un arreglo
// metodo find

var platillos = ["ceviche", "tacos", "pasta"];

//var pElegido = platillos.find( platillo => platillo == "tostadas");

// objeto menu
var menu = [
	{ nombre: 'Ceviche', precio: 20, pais: 'Perú' },
	{ nombre: 'Tacos', precio: 10, pais: 'México' },
	{ nombre: 'Pasta', precio: 50, pais: 'Italia' }
];

var pElegido = menu.find(platillo => platillo.nombre == 'Tacos');


console.log(pElegido);