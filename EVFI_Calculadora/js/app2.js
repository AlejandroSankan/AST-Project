//Declaramos variables
var operacion;
var resultado = 0;
var operador  = 0;

// eventos de mouse o teclado.

function presTecla(event){

  var alfa = event.wich || event.keyCode;

  var tecla = String.fromCharCode( alfa );

  //operaciones o nulos o punto

  switch( tecla ) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
      switch (operacion){
        case "+":
        case "-":
        case "*":
        case "/":
          resultado = eval( resultado+operacion+operador;
          operador = 0;
          operacion = tecla;
          break;
        default:
          resultado = operador;
          operador = 0;
          operacion = tecla;
        break;
      }
    case ".":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      operador = operador + tecla;
      break;
    case "Clear":
      break;
    default:
      break;

    }
