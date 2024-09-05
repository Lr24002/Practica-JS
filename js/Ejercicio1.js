// JavaScript source code
function calcular() {
    var numero1 = parseFloat(document.getElementById("txtNumero1").value) || 0;
    var numero2 = parseFloat(document.getElementById("txtNumero2").value) || 0;
    var numero3 = parseFloat(document.getElementById("txtNumero3").value) || 0;

    var resultado = numero1 + numero2 + numero3;
    var promedio = resultado / 3;

    document.getElementById("txtResultado").value = promedio.toFixed(2);
}