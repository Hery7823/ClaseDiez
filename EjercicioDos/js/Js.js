
let suma = 0;
let cantidad = 0;

function calcular() {
    cantidad = Number(document.getElementById("cantidad").value);
    suma = sumar(cantidad);
    if (cantidad > 1) {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de sumas son: ' + cantidad + ' Resultado de la sumatoria: ' + suma;

    } else {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de la suma es: ' + cantidad + ' Resultado de la sumatoria: ' + suma;

    }
}


function calcular1() {
    cantidad = Number(document.getElementById("cantidad").value);
    suma = sumar1(cantidad);
    if (cantidad > 1) {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de sumas son: ' + cantidad + ' Resultado de la sumatoria: ' + suma;

    } else {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de la suma es: ' + cantidad + ' Resultado de la sumatoria: ' + suma;

    }
}

function calcular2() {
    cantidad = Number(document.getElementById("cantidad").value);
    suma = sumar2(cantidad);
    if (cantidad > 1) {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de sumas son: ' + cantidad + ' Resultado de la sumatoria: ' + suma;

    } else {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de la suma es: ' + cantidad + ' Resultado de la sumatoria: ' + suma;

    }
}


function sumar(p1) {
    let contador = 0;
    let acumulador = 0;
    let numero = 0;
    while (contador < p1) {
        numero = Number(prompt('Digite Numeros Naturales'));
        if (numero > 0) {
            contador++;
            acumulador += numero;


        } else {
            alert('El numero NO es UN NATURAL!')

        }
    }
    return acumulador;
}


function sumar1(p1) {
    let contador = 0;
    let acumulador = 0;
    let numero = 0;
    do {
        numero = Number(prompt('Digite Numeros Naturales'));
        if (numero > 0) {
            contador++;
            acumulador += numero;
        } else {
            alert('El numero NO es UN NATURAL!')

        }
    } while (contador < p1)
    return acumulador;
}


function sumar2(p1) {

    let acumulador = 0;
    let numero = 0;

    for (let i = 0; i < p1; i++) {
        numero = Number(prompt('Digite Numero Natural ' + (i + 1)));
        if (numero > 0) {
            acumulador += numero;

        } else {
            alert('El numero NO es UN NATURAL!')

        }
    }


    return acumulador;
}