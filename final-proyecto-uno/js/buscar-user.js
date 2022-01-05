
var botonBuscar = document.querySelector("#buscar-usuario");

botonBuscar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load", function () {

         var errorAjax = document.querySelector("#error-ajax");

        // manejo de errores
        if (xhr.status == 200) {
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            //console.log(respuesta);
            var pacientes = JSON.parse(respuesta);
            // convertir string a objeto json
            //console.log(pacientes);
            pacientes.forEach(function (paciente) {
                adicionarPaciente(paciente);
                //console.log(paciente);
            })
        } else {
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();

})