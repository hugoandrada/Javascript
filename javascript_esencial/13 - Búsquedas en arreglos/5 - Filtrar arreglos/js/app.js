"use strict"

//********************************
//*** Filtrar arreglos - metodo find y filter
// find - encuentra solo la primer coincidencia
// filter - encuentra todas las coincidencias

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
    },
    {
        nombre: 'Quesadillas',
        precio: 15,
        pais: 'México'
    }
];

var resultado = null;


//resultado =  menu.find(platillo => platillo.pais == 'México');

// el metodo filter devuelve todos los elementos que coincidan
resultado =  menu.filter(platillo => platillo.pais == 'México');

console.log(resultado);