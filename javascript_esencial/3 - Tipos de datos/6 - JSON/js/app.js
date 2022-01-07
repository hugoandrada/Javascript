"use strict"

// JSON => JavaScript Object Notation
// formato de intercambio de datos
var persona = {nombre: 'Sergio', twitter: 'yacafx'};

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

// convertir el objeto en una cadena de texto
var personaJSON = JSON.stringify(persona);

// volver a convertir la cadena en objeto
var nuevaPersona = JSON.parse(personaJSON);
