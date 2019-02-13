//Declaramos variables
var operacion='';
var resultado = 0;
var operador  = 0;
var entero = 10;
var decimal = 1;

// variables para la duplicidad de igual
var operadorAnt = 0;
var operacionAnt = "";

// eventos de mouse o teclado.
function presPunto( ){
  document.getElementById('punto').style = "padding:5px; background-color: #999999";

  if ( operador.toString().length < 8) {
    if (decimal == 1) {
      operador = operador+'.';
      decimal = 0.1;
      entero = 1;
    }
    document.querySelector("#calculadoraFondo #display").innerHTML = operador;
  }
}

function ingresaDigito( tecla ) {
  if (operador.toString().length < 8) {
    operador = operador * entero + decimal * tecla;
    if (decimal != 1) {
      decimal = decimal / 10;
    }
  }
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
}

function pres1( ){
  document.getElementById('1').style = "padding:3px; background-color: #999999";
  ingresaDigito(1);
}
function pres2 ( ){
  document.getElementById( '2' ).style = "padding:3px; background-color: #999999";
  ingresaDigito(2);
}
function pres3 ( ){
  document.getElementById('3').style = "padding:3px; background-color: #999999";
  ingresaDigito(3);
}
function pres4 ( ){
  document.getElementById('4').style = "padding:3px; background-color: #999999";
  ingresaDigito(4);
}
function pres5( ){
  document.getElementById('5').style = "padding:3px; background-color: #999999";
  ingresaDigito(5);
}
function pres6( ){
  document.getElementById('6').style = "padding:3px; background-color: #999999";
  ingresaDigito(6);
}
function pres7 ( ){
  document.getElementById('7').style = "padding:3px; background-color: #999999";
  ingresaDigito(7);
}
function pres8( ){
  document.getElementById('8').style = "padding:3px; background-color: #999999";
  ingresaDigito(8);
}
function pres9( ){
  document.getElementById('9').style = "padding:3px; background-color: #999999";
  ingresaDigito(9);
}
function pres0( ){
  document.getElementById('0').style = "padding:3px; background-color: #999999";
  ingresaDigito(0);
}
function presSign( ){
  document.getElementById('sign').style = "padding:3px; background-color: #999999";
  operador = operador * (-1);
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
}
function presReset() {
  document.getElementById('on').style = "padding:3px; background-color: #999999";
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
  document.querySelector("#calculadoraFondo #display").innerHTML = operador;
}

// Calculos

function calculaResultado(){

  if (operacion != '') {
    resultado = eval( resultado + operacion + operador );
    if ( resultado.toString().length > 8) {
      resultado = resultado.toString().substr(1,8);
    }
    document.querySelector("#calculadoraFondo #display").innerHTML = resultado
  }
  else {
      resultado = operador;
  }
  operador = 0;
  entero = 10;
  decimal = 1;
}

function presMas(){
  document.getElementById('mas' ).style = "padding:1px; background-color: #999999";
  calculaResultado();
  operacion = '+';
  operacionAnt = '';
  operadorAnt = 0;
}

function presMenos(){
  document.getElementById('menos' ).style = "padding:3px; background-color: #999999";
  calculaResultado();
  operacion = '-';
  operacionAnt = '';
  operadorAnt = 0;
}

function presPor(){
  document.getElementById('por' ).style = "padding:3px; background-color: #999999";
  calculaResultado();
  operacion = '*';
  operacionAnt = '';
  operadorAnt = 0;
}

function presDiv(){
  document.getElementById('dividido' ).style = "padding:3px; background-color: #999999";
  calculaResultado();
  operacion = '/';
  operacionAnt = '';
  operadorAnt = 0;

}

function presRaiz(){
}

function presIgual(){

  if ( operacionAnt != '') {
    operador = operadorAnt;
    operacion = operacionAnt;
  }
  else {
    operacionAnt = operacion;
    operadorAnt = operador;
  }

  document.getElementById('igual').style = "padding:3px; background-color: #999999";
  calculaResultado();
 // se guarda por si se repite el =

  operacion = '';
  operador = resultado;
}

// fin de presion de teclas

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
function depresPunto (){ document.getElementById('punto').style = "padding: 0";}
function depresSign (){ document.getElementById('sign').style = "padding: 0";}
function depresReset (){ document.getElementById('on').style = "padding: 0";}
function depresMas (){ document.getElementById('mas').style = "padding: 0";}
function depresMenos (){ document.getElementById('menos').style = "padding: 0";}
function depresDiv (){ document.getElementById('dividido').style = "padding: 0";}
function depresPor (){ document.getElementById('por').style = "padding: 0";}
function depresRaiz (){ document.getElementById('raiz').style = "padding: 0";}
function depresIgual (){ document.getElementById('igual').style = "padding: 0";}

function presionaTecla(event) {
  var tecla=event.wich||event.keyCode;
  switch ( tecla ) {
    case 48: pres0(); depres0(); break;
    case 49: pres1(); depres1(); break;
    case 50: pres2(); depres2(); break;
    case 51: pres3(); depres3(); break;
    case 52: pres4(); depres4(); break;
    case 53: pres5(); depres5(); break;
    case 54: pres6(); depres6(); break;
    case 55: pres7(); depres7(); break;
    case 56: pres8(); depres8(); break;
    case 57: pres9(); depres9(); break;
    case 43: presMas(); depresMas(); break;
    case 45: presMenos(); depresMenos(); break;
    case 42: presPor(); depresPor(); break;
    case 47: presDiv(); depresDiv(); break;
    case 13: presIgual(); depresIgual(); break;
    case 61: presIgual(); depresIgual(); break;
    case 46: presPunto(); depresPunto(); break;
    case 127: presReset(); depresReset(); break;
    case 08: presReset(); depresReset(); break;

  }
}

// presion de mouse...

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

// presion de teclado..
document.onkeypress=presionaTecla;
