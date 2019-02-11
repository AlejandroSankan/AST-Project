//Declaramos variables
var operacion='';
var tecla='';
var resultado = 0;
var operador  = 0;
var entero = 10;
var decimal = 1;

// eventos de mouse o teclado.
function presPunto( ){
  tecla = '.';
  document.getElementById('punto').style = "padding:5px; background-color: #999999";
  operador = operador+'.';
  document.querySelector("#calculadoraFondo #display").innerHTML = operador
  decimal = 0.1;
  entero = 1;
}
function pres1( ){
  document.getElementById('1').style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*2;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function pres2 ( ){
  document.getElementById( '2' ).style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*2;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function pres3 ( ){
  document.getElementById('3').style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*3;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function pres4 ( ){
  document.getElementById('4').style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*4;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function pres5( ){
  document.getElementById('5').style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*5;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function pres6( ){
  document.getElementById('6').style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*6;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function pres7 ( ){
  document.getElementById('7').style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*7;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function pres8( ){
  document.getElementById('8').style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*8;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function pres9( ){
  document.getElementById('9').style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*9;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function pres0( ){
  document.getElementById('0').style = "padding:5px; background-color: #999999";
  operador = operador*entero + decimal*0;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  if (decimal != 1) {decimal = decimal / 10;}
}
function presSign( ){
  document.getElementById('sign').style = "padding:5px; background-color: #999999";
  operador = operador * (-1);
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
}
function presReset() {
  operacion = '';
  resultado = 0;
  operador  = 0;
  entero = 10;
  decimal = 1;
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
}

function limpiar() { // cuando se inytroduce una operacion
  operador = 0;
  entero = 10;
  decimal = 1;
}

function presMas(){

}
function presMenos(){

}
function presPor(){

}
function presDiv(){

}
function presRaiz(){

}
function presIgual(){

}
// fin de presion de teclas

function depresPunto (){ document.getElementById('punto').style = "padding: 0";}
function depres1 (){ document.getElementById('1').style = "padding: 0";}
function depres2 (){ document.getElementById('2').style = "padding: 0";}
function depres3 (){ document.getElementById('3').style = "padding: 0";}
function depres4 (){ document.getElementById('4').style = "padding: 0";}
function depres5 (){ document.getElementById('5').style = "padding: 0";}
function depres6 (){ document.getElementById('6').style = "padding: 0";}
function depres7 (){ document.getElementById('7').style = "padding: 0";}
function depres8 (){ document.getElementById('8').style = "padding: 0";}
function depres9 (){ document.getElementById('9').style = "padding: 0";}
function depres0 (){ document.getElementById('0').style = "padding: 0";}
function depresSign (){ document.getElementById('sign').style = "padding: 0";}
function depresReset (){ document.getElementById('on').style = "padding: 0";}
function depresMas (){ document.getElementById('mas').style = "padding: 0";}
function depresMenos (){ document.getElementById('menos').style = "padding: 0";}
function depresDiv (){ document.getElementById('dividido').style = "padding: 0";}
function depresPor (){ document.getElementById('por').style = "padding: 0";}
function depresRaiz (){ document.getElementById('raiz').style = "padding: 0";}
function depresIgual (){ document.getElementById('igual').style = "padding: 0";}

// otros

document.getElementById('punto').onmousedown = presPunto;
document.getElementById('1').onmousedown = pres1;
document.getElementById('2').onmousedown = pres2;
document.getElementById('3').onmousedown = pres3;
document.getElementById('4').onmousedown = pres4;
document.getElementById('5').onmousedown = pres5;
document.getElementById('6').onmousedown = pres6;
document.getElementById('7').onmousedown = pres7;
document.getElementById('8').onmousedown = pres8;
document.getElementById('9').onmousedown = pres9;
document.getElementById('0').onmousedown = pres0;
document.getElementById('sign').onmousedown = presSign;
document.getElementById('on').onmousedown = presReset;
document.getElementById('mas').onmousedown = presMas;
document.getElementById('menos').onmousedown = presMenos;
document.getElementById('dividido').onmousedown = presDiv;
document.getElementById('por').onmousedown = presPor;
document.getElementById('raiz').onmousedown = presRaiz;
document.getElementById('igual').onmousedown = presIgual;

document.getElementById('punto').onmouseup = depresPunto;
document.getElementById('1').onmouseup = depres1;
document.getElementById('2').onmouseup = depres2;
document.getElementById('3').onmouseup = depres3;
document.getElementById('4').onmouseup = depres4;
document.getElementById('5').onmouseup = depres5;
document.getElementById('6').onmouseup = depres6;
document.getElementById('7').onmouseup = depres7;
document.getElementById('8').onmouseup = depres8;
document.getElementById('9').onmouseup = depres9;
document.getElementById('0').onmouseup = depres0;
document.getElementById('sign').onmouseup = depresSign;
document.getElementById('on').onmouseup = depresReset;
document.getElementById('mas').onmouseup = depresMas;
document.getElementById('menos').onmouseup = depresMenos;
document.getElementById('dividido').onmouseup = depresDiv;
document.getElementById('por').onmouseup = depresPor;
document.getElementById('raiz').onmouseup = depresRaiz;
document.getElementById('igual').onmouseup = depresIgual;
