let operandoa;
let operandob;
let oper;

function init(){
    //variables
    let resultado = document.getElementById("resultado");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let borrar = document.getElementById("borrar");
    let cero = document.getElementById("cero");
    let igual = document.getElementById("igual");

    //eventos
    uno.onclick = function(e){
        resultado.textContent += "1";
    }
    dos.onclick = function(e){
        resultado.textContent += "2";
    }
    tres.onclick = function(e){
        resultado.textContent += "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent += "4";
    }
    cinco.onclick = function(e){
        resultado.textContent += "5";
    }
    seis.onclick = function(e){
        resultado.textContent += "6";
    }
    siete.onclick = function(e){
        resultado.textContent += "7";
    }
    ocho.onclick = function(e){
        resultado.textContent += "8";
    }
    nueve.onclick = function(e){
        resultado.textContent += "9";
    }
    cero.onclick = function(e){
        resultado.textContent += "0";
    }

    borrar.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operandoa = resultado.textContent;
        opera = "+";
        limpiar();
    }

    resta.onclick = function(e){
        operandoa = resultado.textContent;
        opera = "-";
        limpiar();
    }

    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        opera = "*";
        limpiar();
    }

    division.onclick = function(e){
        operandoa = resultado.textContent;
        opera = "/";
        limpiar();
    }

    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    opera = "";
}

function resolver(){
    let res = "";
    switch(opera){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
    
}