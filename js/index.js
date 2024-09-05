// JavaScript source code
function calcular() {
    var numero1 = parseFloat(document.getElementById("txtNumero1").value) || 0;
    var numero2 = parseFloat(document.getElementById("txtNumero2").value) || 0;
  
    
    var resultado = numero1 + numero2 ;
    var promedio = resultado ;

    document.getElementById("txtResultado").value = promedio;
}
