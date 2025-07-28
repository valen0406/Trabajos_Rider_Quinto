function fnSumaReferencia(num1,num2){
    var operacionS= parseInt(num1)+parseInt(num2); 
    var resultadoFinal=operacionS;
    document.getElementById("ResultadoSumreferencia").innerHTML=operacionS;
}

//Esta funcion, llama a la funcion para guardarla aqui
function fnSumaValor(num1, num2) {
   // let fnAnonima = (a, b) => parseInt(a) + parseInt(b);
    const resrecibeDatoFnV = funSumaValorLlamada(num1, num2);
    document.getElementById("ResultadoSumaV").innerHTML =
        "Resultado por valor (suma): " + num1 + " + " + num2 + " = " + resrecibeDatoFnV;
}

function fnSumaValor(num1,num2){
    const recibeDatoFnV= funSumaValorLlamada(num1,num2,num3,num4);
    document.getElementById("ResultadoSumaV").innerHTML= "Suma por valor: "+num1 + " + " + num2 +  " = " + recibeDatoFnV;
}
// esta funcion hace la operacion de la suma
function funSumaValorLlamada(num1,num2){
    var suma= parseInt(num1)+parseInt(num2); 
    return suma;
}
// funcion flecha
    let fnAnonima = (num1,num2) => parseInt(num1)+parseInt(num2);


//funcion multiplicacion
let fnAnonima = (num1,num2) => parseInt(num1)*parseInt(num2);
function fnMultiValor(num1,num2){
    const recibeDatoFnvM= fnAnonima(num1,num2);
    document.getElementById("ResultadoMultiValor").innerHTML= "Multiplicacion por valor: "+num1 + " * " + num2 +  " = " + recibeDatoFnvM;
}
let fnAnonimaD = (num1,num2) => (parseInt(num1)/parseInt(num2));
function fnDiviValir(num1,num2){
    const recibeDatoFnvD= fnAnonima(num1,num2);
    document.getElementById("ResultadoDiviValor").innerHTML= "Division por valor: "+num1 + " / " + num2 +  " = " + recibeDatoFnvD;
}

function condicional(num1,num2){ //Si se pone en el radio "referencia" hara la accion por referencia, y asi mismo por valor
    let tipo = document.querySelector('input'[name="tipoSuma"]:checked');
    if(!tipo){
        document.getElementById('ResultadoCondicional').innerHTML="Seleccione un tipo de suma.";
        return;
    }
    if(tipo.value === 'referencia'){
        fnSumaReferencia(num1,num2);
        document.getElementById('ResultadoCondicional').innerHTML="Suma por Referencia";
    }else if (tipo.value === 'valor'){
        fnSumaValor(num1,num2);
        document.getElementById('ResultadoCondicional').innerHTML="Suma por Valor";
    }
} 



// -------- FUNCIONES POR VALOR USANDO FLECHA ANÓNIMA --------

/*
function fnRestaValor(num1, num2, num3, num4) {
    let fnAnonima = (a, b, c, d) => parseInt(a) - parseInt(b) - parseInt(c) - parseInt(d);
    const resultado = fnAnonima(num1, num2, num3, num4);
    document.getElementById("ResultadoSumaV").innerHTML =
        "Resultado por valor (resta): " + resultado;
}

function fnMultiplicarValor(num1, num2, num3, num4) {
    let fnAnonima = (a, b, c, d) => parseInt(a) * parseInt(b) * parseInt(c) * parseInt(d);
    const resultado = fnAnonima(num1, num2, num3, num4);
    document.getElementById("ResultadoSumaV").innerHTML =
        "Resultado por valor (multiplicación): " + resultado;
}

function fnDividirValor(num1, num2, num3, num4) {
    if (parseInt(num2) === 0 || parseInt(num3) === 0 || parseInt(num4) === 0) {
        document.getElementById("ResultadoSumaV").innerHTML = "Error: división por cero";
        return;
    }
    let fnAnonima = (a, b, c, d) => parseInt(a) / parseInt(b) / parseInt(c) / parseInt(d);
    const resultado = fnAnonima(num1, num2, num3, num4);
    document.getElementById("ResultadoSumaV").innerHTML =
        "Resultado por valor (división): " + resultado;
} */
function sumame(numero1, numero2, sumaResult, sumaMult) {
    var sumar = numero1+numero2;
    sumaResult(sumar);
    sumaMult(sumar);
    return sumar;
}
sumame (5,7, function(dato){
    console.log("Operación:",dato);
}, function(dato){
    console.log("dato multiplicado por dos" (dato*2));
});

const primerNombre = "Jhon";
const mensaje = "Hola Mundo"
console.log(`Nombre: ${primerNombre} Mi Mensaje: ${mensaje}`);

const primerLlamado = () => {
    return "Primera llamada"
}

const segundoLlamado = () => {
    return "Segunda llamada"
}

const tercerLlamado = () => {
    return "Tercera llamada"
}
console.log(primerLlamado());
setTimeout(segundoLlamado, 2000);
console.log(tercerLlamado()); 
setTimeout(() => {
    console.log("primero");
    setTimeout(() => {
        console.log("segundo");
        setTimeout(() => {
            console.log("tercero");
        }, 1000);
    },2000);
},1000);

const miPromessaa = false,
const creoPromessa = new Promise((resolve, reject) => {
    if(miPromessaa){
        resolve(false);
    }else{
        reject("Dato de la promesa no trabajado");
    }
})