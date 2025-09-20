// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [""]; 
let lista = document.getElementById("listaAmigos");

//Funcción para agregar amigos a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo");
    let nombreValue = nombre.value.trim();  
    if (nombre === "") {
        alert("Por favor, ingresa un nombre valido.").value;
        return;
    }
    nombres.push(nombreValue);
    nombre.value = "";
    console.log(nombres);
    listaNombres();
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


function sortearAmigo() {
    if (nombres.length <= 1) {
        alert("No hay nombres en la lista pa sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * (nombres.length - 1)) + 1;

    let nombreSorteado = nombres[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El nombre sorteado es:${nombreSorteado}`;
}


