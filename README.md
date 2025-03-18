# Amigo Secreto

Este proyecto es una aplicación web que permite gestionar una lista de amigos y realizar un sorteo para seleccionar un amigo al azar. La aplicación incluye funcionalidades para agregar amigos, evitar duplicados, validar entradas, realizar sorteos y reiniciar la lista.

## Funcionalidades

### 1. **Agregar amigos**
   - Los usuarios pueden agregar nombres a la lista de amigos utilizando el campo de entrada y el botón "Añadir".
   - Al presionar la tecla **Enter**, también se agrega el nombre automáticamente.
   - Validaciones:
     - No se permite agregar nombres vacíos.
     - No se permite agregar nombres que contengan números.
     - No se permite agregar nombres duplicados.

### 2. **Sortear un amigo**
   - Al hacer clic en el botón "Sortear amigo", se selecciona un amigo al azar de la lista.
   - El amigo sorteado se muestra en la sección de resultados.
   - El amigo sorteado se elimina automáticamente de la lista para evitar repeticiones.

### 3. **Reiniciar la lista**
   - Al hacer clic en el botón "Reiniciar", se vacía la lista de amigos y se limpia la sección de resultados.

### 4. **Interfaz accesible y estilizada**
   - Los botones están alineados horizontalmente para una mejor experiencia visual.
   - Los botones incluyen íconos representativos y descripciones accesibles para usuarios con tecnologías de asistencia.

---

## Cambios realizados

### **HTML**
1. Se agregó un botón para reiniciar la lista de amigos:
   ```html
   <button class="button-draw" onclick="reiniciarAmigos()" aria-label="Reiniciar lista de amigos">
       <img src="assets/restart.png" alt="Ícono para reiniciar">
       Reiniciar
   </button>
