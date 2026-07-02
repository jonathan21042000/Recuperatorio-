// =============================
// LISTA DE ESTUDIANTES
// =============================
let lista = [];

// Mostrar la lista
function mostrarLista() {

    const contenedor = document.getElementById("lista");
    contenedor.innerHTML = "";

    // HEAD
    const head = document.createElement("div");
    head.className = "head";
    head.innerHTML = "HEAD";
    contenedor.appendChild(head);

    if (lista.length > 0) {
        agregarFlecha(contenedor);
    }

    // Recorrer la lista
    lista.forEach((estudiante, i) => {

        const nodo = document.createElement("div");
        nodo.className = "nodo";

        nodo.innerHTML = `
            <strong>CI</strong><br>${estudiante.ci}<br><br>
            <strong>Nombre</strong><br>${estudiante.nombre}<br><br>
            <strong>Apellido</strong><br>${estudiante.apellido}
        `;

        contenedor.appendChild(nodo);

        if (i < lista.length - 1) {
            agregarFlecha(contenedor);
        }

    });

    if (lista.length > 0) {
        agregarFlecha(contenedor);
    }

    const nulo = document.createElement("div");
    nulo.className = "null";
    nulo.innerHTML = "NULL";
    contenedor.appendChild(nulo);

}

// Agregar flechas
function agregarFlecha(contenedor) {

    const flecha = document.createElement("div");
    flecha.className = "flecha";
    flecha.innerHTML = "➜";

    contenedor.appendChild(flecha);

}

// Insertar al inicio
function insertarInicio() {

    const ci = prompt("Ingrese el CI:");

    if (!ci) return;

    const nombre = prompt("Ingrese el nombre:");
    const apellido = prompt("Ingrese el apellido:");

    lista.unshift({
        ci,
        nombre,
        apellido
    });

    mostrarLista();

}

// Insertar al final
function insertarFinal() {

    const ci = prompt("Ingrese el CI:");

    if (!ci) return;

    const nombre = prompt("Ingrese el nombre:");
    const apellido = prompt("Ingrese el apellido:");

    lista.push({
        ci,
        nombre,
        apellido
    });

    mostrarLista();

}

// Insertar antes de un CI
function insertarAntes() {

    if (lista.length === 0) {

        alert("No existen estudiantes registrados.");
        return;

    }

    const referencia = prompt("Insertar antes del CI:");

    const posicion = lista.findIndex(e => e.ci === referencia);

    if (posicion === -1) {

        alert("Referencia no encontrada");
        return;

    }

    const ci = prompt("Nuevo CI:");
    const nombre = prompt("Nombre:");
    const apellido = prompt("Apellido:");

    lista.splice(posicion, 0, {
        ci,
        nombre,
        apellido
    });

    mostrarLista();

}

// Buscar estudiante
async function buscarEstudiante() {

    if (lista.length === 0) {

        alert("No existen estudiantes registrados.");
        return;

    }

    const ci = prompt("Ingrese el CI a buscar:");

    mostrarLista();

    const nodos = document.querySelectorAll(".nodo");

    for (let i = 0; i < lista.length; i++) {

        nodos[i].classList.add("resaltar");

        await esperar(700);

        nodos[i].classList.remove("resaltar");

        if (lista[i].ci === ci) {

            nodos[i].classList.add("encontrado");

            alert(
                "Estudiante encontrado\n\n" +
                "CI: " + lista[i].ci +
                "\nNombre: " + lista[i].nombre +
                "\nApellido: " + lista[i].apellido +
                "\nNodos recorridos: " + (i + 1)
            );

            return;

        }

    }

    alert("El estudiante no existe.");

}

// Limpiar lista
function limpiarLista() {

    if (confirm("¿Desea eliminar toda la lista?")) {

        lista = [];
        mostrarLista();

    }

}

// Espera para animaciones
function esperar(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

// Mostrar lista al iniciar
mostrarLista();
