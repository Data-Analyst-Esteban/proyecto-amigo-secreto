// Declarando un array para almacenar los nombres de los amigos ingresados
let amigos = []; 

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const campoNombre = document.getElementById('amigo');
    const nombreAmigo = campoNombre.value.trim(); // .trim() para eliminar espacios en blanco al inicio y final

// Validar la entrada para asegurarse de que el campo no esté vacío.
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return; 
    }

// Actualizar el array de amigos.
    amigos.push(nombreAmigo);

// Actualizar la visualización de la lista de amigos.
    actualizarLista();

// Limpiar el campo de entrada.
    campoNombre.value = '';
    campoNombre.focus(); 
}

// Función que actualiza la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

// Iterar sobre el arreglo 'amigos' para crear y agregar los elementos <li>.
    amigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        lista.appendChild(elementoLista);
    });
}

// Función que selecciona de manera aleatoria uno de los nombres almacenados en el array 'amigos' y muestra el resultado.
function sortearAmigo() {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

// Limpiar el resultado anterior
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

// Validar que haya amigos disponibles para el sorteo.
        if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo para sortear.");
        return;
    }
    
// Crear un nuevo elemento <li> para mostrar el resultado del sorteo
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `🎉 El amigo secreto es: ${amigoSorteado} 🎉`;
    resultado.appendChild(itemResultado);
}
