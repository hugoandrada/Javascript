"use strict"

//********************************
//*** Busqueda de índice de elementos findindex
// es sensible a mayusculas y minisculas

var platillos = ["ceviche", "tacos", "pasta"];

var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    }
]


// var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos' );

var numPlatillo = menu.findIndex( platillo => platillo.nombre == 'Pasta' );

console.log("Platillo número: ", numPlatillo);