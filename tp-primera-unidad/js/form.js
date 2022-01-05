// formulario agregar pacientes -----------

var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(e){
    e.preventDefault(); // prevent default

    var form = document.querySelector("#form-adicionar");
    
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //console.log("click boton formulario");
    console.log(nombre, peso, altura, gordura);
    
    // crear tablas --------------------

    var tabla = document.querySelector("#tabla-pacientes");

    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    ImcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // funcion calcular imc
    ImcTd.textContent = calcularIMC(peso, altura);

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(ImcTd);

    //console.log(pacienteTr);
    tabla.appendChild(pacienteTr);

    
});
// fin adiconar pacientes ---------------------