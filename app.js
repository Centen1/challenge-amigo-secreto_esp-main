// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [""]; 


//Funcción para agregar amigos a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }
    nombres.push(nombre);
    document.getElementById("amigo").value = "";
    console.log(nombres);
}


function listaNombres() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    nombres.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
        });
}

