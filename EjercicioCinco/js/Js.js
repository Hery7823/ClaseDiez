

let cantidad = 10;
let cantidadPositiva = 0;
let cantidadNegativa = 0;
let cantidadCero = 0;

function calcular() {
    sumar(cantidad);
}


function calcular1() {
    sumar1(cantidad);
}

function calcular2() {
    sumar2(cantidad);
}


function sumar(p1) {

    let contador = 0;
    let numero = 0;

    while (contador < p1) {
        numero = Number(prompt('Digite Numero ' + (contador + 1)));
        if (numero > 0) {
            contador++;
            cantidadPositiva += 1;
            document.getElementById('resultado').value += numero + ', ';
            document.getElementById("cantidad").value = cantidadPositiva;
        }
        else if (numero == 0) {
            contador++;
            document.getElementById('resultado1').value += numero + ', ';
            cantidadCero += 1;
            document.getElementById("cero").value = cantidadCero;
        }
        else {
            contador++;
            document.getElementById('resultado2').value += numero + ', ';
            cantidadNegativa += 1;
            document.getElementById("negativo").value = cantidadNegativa;
        }
    }
    return 0;
}


function sumar1(p1) {

    let contador = 0;
    let numero = 0;

    do {
        numero = Number(prompt('Digite numero ' + (contador + 1)));
        if (numero > 0) {
            contador++;
            document.getElementById('resultado').value += numero + ', ';
            document.getElementById("cantidad").value = cantidadPositiva += 1;

        } else if (numero == 0) {
            contador++;
            document.getElementById('resultado1').value += numero + ', ';
            document.getElementById("cero").value = cantidadCero += 1;

        }
        else {
            contador++;
            document.getElementById('resultado2').value += numero + ', ';
            document.getElementById("negativo").value = cantidadNegativa += 1;
        }
    } while (contador < p1)
    return 0;
}


function sumar2(p1) {  

    let numero = 0; 

    for(let i = 0; i < p1; i++){

        numero = Number(prompt('Digite numero ' + (i + 1)));

        if ( numero > 0 ){

            document.getElementById('resultado').value += numero + ', ';
            document.getElementById("cantidad").value = cantidadPositiva += 1;            
        }
        else if( numero == 0 ){
            
            document.getElementById('resultado1').value += numero + ', ';
            document.getElementById("cero").value = cantidadCero += 1;
        }
        else{
            
            document.getElementById('resultado2').value += numero + ', ';
            document.getElementById("negativo").value = cantidadNegativa += 1;
        }

    }

    return 0;
}