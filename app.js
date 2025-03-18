// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i = 0; i < amigo.length; i++){
       let item = document.createElement("li");
       item.textContent = amigo[i];
       listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
  if(amigo.length === 0){
    alert("No hay amigos para sortear");
    return;
  }
  let indiceSorteado = Math.floor(Math.random() * amigo.length);
  let amigoSorteado = amigo[indiceSorteado];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
  amigo.splice(indiceSorteado, 1);
  renderizarAmigos();
}
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo || typeof nombreAmigo !== 'string'){
      alert("Debes ingresar un nombre válido");
      return;
  }
  if (/\d/.test(nombreAmigo)) {
    alert("El nombre no puede contener números");
    return;
}  
    if (amigo.includes(nombreAmigo)) {
      alert("El nombre ya está en la lista");
      return;
  }  
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}
function reiniciarAmigos() {
    amigo = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}



