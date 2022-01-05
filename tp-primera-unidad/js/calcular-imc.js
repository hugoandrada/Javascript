// comprobar mci pacientes -----------------

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc")
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc;

    var pesoValido = true;
    var alturaValida = true;

    if ((peso < 0) || (peso > 1000)) {
        console.log("peso incorrecto");
        tdIMC.textContent = "peso incorrecto";
        pesoValido = false;
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-incorrecto");
    }

    if ((altura < 0) || (altura > 3.00)) {
        console.log("altura incorrecto");
        tdIMC.textContent = "altura incorrecta";
        alturaValida = false;
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-incorrecto");
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdIMC.textContent = calcularIMC(peso, altura);

    }

}

// funcion calcular IMC
function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2) // solo retorne con 2 decimales.
}

// fin comprobar mci --------------------------------
