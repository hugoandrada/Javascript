"use strict"

//********************************
//*** Parámetros REST (...)

function cocinar(ingrediente1, ingrediente2,...masIngredientes) {
    console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2: ', ingrediente2);
    console.log("masIngredientes", masIngredientes);
}

cocinar("Tomate", "Arroz", "Frijoles", "Pescado", "Chile");