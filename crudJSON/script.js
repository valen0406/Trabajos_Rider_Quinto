// Función para mostrar mensajes en la consola
function log(text, outputId) {
    const output = document.getElementById(outputId);
    output.innerHTML = text
}

// Función para obtener datos de una API
async function obtenerDatos() {
    const url = "https://pokeapi.co/api/v2/berry/1";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("HTTP error: " + response.status);
       
        const data = await response.json();
        log(JSON.stringify(data, null, 2), "outputServer");
        return data;
    } catch (error) {
        log("Error al obtener datos: " + error.message, "outputServer");
    }
}

// Función para insertar datos de ejemplo
function insertarEjemplo() {
    const ejemploJSON = `{
        "nombre": "Valentina",
        "apellido": "Gironza",
        "edad": 23,
        "activo": true
    }`;
    document.getElementById("inputJson").value = ejemploJSON;
    log("Ejemplo insertado. Ahora puedes guardar.", "outputClient");
}

// Función para guardar datos en LocalStorage
function guardarDatos() {
    const jsonData = document.getElementById("inputJson").value;
    try {
        const objeto = JSON.parse(jsonData);
        localStorage.setItem("datos", JSON.stringify(objeto));
        log("Datos guardados en LocalStorage.", "outputClient");
    } catch (e) {
        log("Error al guardar datos: " + e.message, "outputClient");
    }
}

// Función para cargar datos desde LocalStorage
function cargarDatos() {
    const datos = localStorage.getItem("datos");
    if (datos) {
        log("Datos cargados desde LocalStorage:\n" + datos, "outputClient");
        document.getElementById("inputJson").value = datos;
    } else {
        log("No hay datos en LocalStorage.", "outputClient");
    }
}