
//eliminar pacientes
var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function (event) {
    //console.log("click");
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();
    },500);
});


/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        //console.log("click click");
        this.remove();
    });
}); */