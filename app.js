// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [""]; 


function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }
    nombres.push(nombre);
    document.getElementById("amigo").value = "";
    console.log(nombres);
    alert("Amigo añadido: " + nombre);
}


