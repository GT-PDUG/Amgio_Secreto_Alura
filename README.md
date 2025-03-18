# Amigo Secreto

Este proyecto es una aplicación web que permite gestionar una lista de amigos y realizar un sorteo para seleccionar un amigo al azar. La aplicación incluye funcionalidades para agregar amigos, evitar duplicados, validar entradas, realizar sorteos y reiniciar la lista.

## Funcionalidades

### 1. **Agregar amigos**
   - Los usuarios pueden agregar nombres a la lista de amigos utilizando el campo de entrada y el botón "Añadir".
   - Validaciones:
     - No se permite agregar nombres vacíos.
     - No se permite agregar nombres que contengan números.
     - No se permite agregar nombres duplicados.
```app.js
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
```
### 2. **Sortear un amigo**
   - Al hacer clic en el botón "Sortear amigo", se selecciona un amigo al azar de la lista.
   - El amigo sorteado se muestra en la sección de resultados.
   - El amigo sorteado se elimina automáticamente de la lista para evitar repeticiones.
```app.js
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
```
### 3. **Reiniciar la lista**
   - Al hacer clic en el botón "Reiniciar", se vacía la lista de amigos y se limpia la sección de resultados.
```app.js
      function reiniciarAmigos() {
      amigo = [];
      document.getElementById("listaAmigos").innerHTML = "";
      document.getElementById("resultado").innerHTML = "";
      }
```
### 4. **Evento para agregar amigos al presionar Enter**
   - Al presionar la tecla **Enter**, también se agrega el nombre automáticamente.
```app.js
       document.getElementById("amigo").addEventListener("keypress", function(event) {
       if (event.key === "Enter") {
       agregarAmigo();
       }
```
## Cambios realizados

### **HTML**
1. Se agregó un botón para reiniciar la lista de amigos:
   ```html
   <button class="button-draw" onclick="reiniciarAmigos()" aria-label="Reiniciar lista de amigos">
       <img src="assets/restart.png" alt="Ícono para reiniciar">
       Reiniciar
   </button>
2. Cambio del icono de reiniciar
```
    <img src="assets/restart.png" alt="Ícono para reiniciar">
```
### **CSS**   
1. Estilo para alinear los botones horizontalmente:
```style.CSS
    document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
        }
```
2. Estilo para los botones:
```style.CSS
    .button-draw, .button-reset {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: var(--color-white);
    cursor: pointer;
    font-size: 16px;
      }

      .button-draw img, .button-reset img {
       margin-right: 5px; /* Espacio entre el icono y el texto */
      }

      .button-draw:hover, .button-reset:hover {
    background-color: #0056b3;
      }
```
#Cómo usar la aplicación
1. Escribe el nombre de un amigo en el campo de entrada y haz clic en "Añadir" o presiona Enter.
2. Repite el proceso para agregar más amigos.
3. Haz clic en "Sortear amigo" para seleccionar un amigo al azar.
4. Haz clic en "Reiniciar" para vaciar la lista y comenzar de nuevo.

#Créditos
Este proyecto fue desarrollado como parte del desafío Amigo Secreto de ALURA para fortalecer habilidades en lógica de programación y manipulación del DOM. `


