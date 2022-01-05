// formulario agregar pacientes -----------

var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (e) {
    e.preventDefault(); // prevent default

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPacientes(form);



    //validar paciente
    var errores = validarPaciente(paciente);

    if (errores.length > 0) {
        mostrarMensaje(errores);
        return;
    }
    adicionarPaciente(paciente);
    form.reset(); // borrar datos del form despues de enviar

    var mensajeErrores = document.querySelector("#mensaje-error");
    mensajeErrores.innerHTML = "";
});

// funcion ingresar datos json
function adicionarPaciente(paciente) {
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);

};

// funcion capturar datos de los pacientes ---------
function capturarDatosPacientes(form) {
    // clase paciente
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
};

function construirTr(paciente) {

    // crea los td y un tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // asigna a las nueva tablas
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function construirTd(dato, clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente) {

    var errores = []

    if (paciente.nombre.length == 0) {
        errores.push("El nombre no puede estar vacio");
    }
    if (paciente.peso.length == 0) {
        errores.push("El peso no puede estar vacio");
    }
    if (paciente.altura.length == 0) {
        errores.push("La altura no puede estar vacio");
    }
    if (paciente.gordura.length == 0) {
        errores.push("La gordura no puede estar vacio");
    }

    if (!validarPeso(paciente.peso)) {
        errores.push("El peso es incorrecto");
    }

    if (!validarAltura(paciente.altura)) {
        errores.push("La altura es incorrecta");
    }
    return errores;
}

function mostrarMensaje(errores) {
    var ul = document.querySelector("#mensaje-error");
    ul.innerHTML = "";
    errores.forEach(function (error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    })

}
// fin adiconar pacientes ---------------------