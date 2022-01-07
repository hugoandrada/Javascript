"use strict"

/***** CICLOS *****/
// 
// Ciclos | Loops | Iteradores
// 
// 2 tipos: Definidos e indefinidos
//
// Definidos: Ciclo FOR
//  
// Indefinidos: Ciclo WHILE y Ciclo DO...WHILE
//
/******************/


//********************************
//*** Ciclo FOR | Ciclo Definido
// Repetición = iteración

// COMPONENTES DE UN CICLO FOR
// Contador
// Condición o evaluación
// Paso | incrementador o decrementador


var productos = 0;


//for ( variable contador; condicion o evaluacion; accion a tomar)
for (let contador = 0; contador < productos; contador++) {
    console.log("Producto #"+ contador);
    debugger;
}

let producto = 10;
for(let i = 0; i < producto; i++) {
    console.log("resultado ",i);
    //debugger;
};