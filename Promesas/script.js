// Ests función permite mostrar mensajes en una "pantalla" dentro del HTML.
// Agrega cada mensaje nuevo seguido por un salto de línea (\n).
function logToScreen(text) {
    const output = document.getElementById("output"); // selecciono el contenedor donde quiero mostrar los mensajes
    output.innerHTML += text + '\n'; // agrego el texto con salto de línea
}

function limpiarConsola() {
    document.getElementById('output').textContent = ''; // borra el texto dentro del div "output"
    console.clear(); // borra lo que se haya escrito en la consola del navegador
}

function ordenarNumeros() {
    // Capturo los valores de los 5 campos de entrada y se convierten a números decimales (float)
    const numeros = [
        parseFloat(document.getElementById("num1").value),
        parseFloat(document.getElementById("num2").value),
        parseFloat(document.getElementById("num3").value),
        parseFloat(document.getElementById("num4").value),
        parseFloat(document.getElementById("num5").value)
    ];

    if (numeros.some(isNaN)) { //Si alguno de los números no fue ingresado correctamente
        // Muestra un mensaje de error en el div "resultado" y en la consola
        const msg = "Por favor, ingresa los 5 números correctamente.";
        document.getElementById("resultado").innerText = msg;
        logToScreen(msg);
        return;
    }

    const ascendente = [...numeros].sort((a, b) => a - b); //líneas oedenadas
    const descendente = [...numeros].sort((a, b) => b - a);

    const textoResultado =
        "Números ingresados: " + numeros.join(", ") + "\n" +
        "Menor a mayor: " + ascendente.join(", ") + "\n" +
        "Mayor a menor: " + descendente.join(", ");

    document.getElementById("resultado").innerText = textoResultado;
    logToScreen("✅ Se ordenaron correctamente tus números");
    
}

// Aquí creo una promesa (myPromise), que simula una operación exitosa después de 1 segundo
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve('Datos desde myPromise');
        } else {
            reject('Error en la promesa');
        }
    }, 1000);
});

// Otra promesa más sencilla, que se resuelve a los 0.5 segundos
const awake = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Despierto");
    }, 500);
});

// Esta función se llama cuando una promesa se resuelve con éxito
function success(result) {
    const msg = "✅ Función 'Success' ejecutada: " + result;
    console.log(msg);
    logToScreen(msg);
    return result.toUpperCase();
}

function ejecutarPromesa() {
    limpiarConsola();

    // Trabajo con myPromise y voy encadenando acciones con then()
    myPromise
        .then(success) // cuando se resuelve, llamo a success()
        .then((data) => {
            const msg = "Datos procesados: " + data;
            console.log(msg);
            logToScreen(msg);

            const resultadoOrdenamiento = ordenarNumeros();
        })
        .catch((error) => {
            const msg = "❌ Ocurrió un error: " + error;
            console.log(msg);
            logToScreen(msg);
        })
        .finally(() => {
            const msg = "🌀 Esto siempre se ejecuta";
            console.log(msg);
            logToScreen(msg);
        });
}


// Aquí combino las dos promesas anteriores (myPromise y awake) y espero que ambas se resuelvan antes de seguir
Promise.all([myPromise, awake])
    .then((resultados) => {
        const msg = "📦 Resultados combinados: " + JSON.stringify(resultados);
        console.log(msg);
        logToScreen(msg);
    })
    .catch((error) => {
        const msg = "❌ Error al combinar promesas: " + error;
        console.log(msg);
        logToScreen(msg);
    })
    .finally(() => {
        const msg = "🌀 Esto siempre se ejecuta (Promise.all)";
        console.log(msg);
        logToScreen(msg);
    });
