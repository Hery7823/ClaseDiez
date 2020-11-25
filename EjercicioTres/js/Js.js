
let suma = 0;
let cantidad = 0;

function calcular() {
    cantidad = Number(document.getElementById("cantidad").value);
    suma = sumar(cantidad);
    if (cantidad > 1) {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de notas son: ' + cantidad + '   Su promedio de notas: ' + suma.toFixed(1);

    } else {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de notas son: ' + cantidad + '  Su promedio de notas: ' + suma.toFixed(1);

    }
}


function calcular1() {
    cantidad = Number(document.getElementById("cantidad").value);
    suma = sumar1(cantidad);
    if (cantidad > 1) {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de notas son: ' + cantidad +' Su promedio de notas: ' + suma.toFixed(1);

    } else {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de notas: ' + cantidad +' Su promedio de notas: ' + suma.toFixed(1);

    }
}

function calcular2() {
    cantidad = Number(document.getElementById("cantidad").value);
    suma = sumar2(cantidad);
    if (cantidad > 1) {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de sumas son: ' + cantidad + ' Su promedio de notas:  ' + suma;

    } else {
        document.getElementById('resultado').innerHTML
            = 'La cantidad de la suma es: ' + cantidad + ' Su promedio de notas: ' + suma;

    }
}


function sumar(p1) {
    let contador = 0;
    let acumulador = 0;
    let numero = 0;
    while (contador < p1) {
        numero = Number(prompt('Digite Nota '+(contador + 1)));
        if (numero > 0 && numero <= 5) {
            contador++;
            acumulador += (numero/p1);


        } else {
            alert('La Nota NO es Validad!')

        }
    }
    return acumulador;
}


function sumar1(p1) {
    let contador = 0;
    let acumulador = 0;
    let numero = 0;
    do {
        numero = Number(prompt('Digite Nota ' + (contador + 1)));
        if (numero > 0 && numero <= 5) {
            contador++;
            acumulador += (numero / p1);
        } else {
            alert('La Nota NO es Validad!')

        }
    } while (contador < p1)
    return acumulador;
}


function sumar2(p1) {

    let acumulador = 0;
    let numero = 0;

    for (let i = 0; i < p1; i++) {
        numero = Number(prompt('Digite Nota  ' + (i + 1)));
        if (numero > 0 && numero <= 5) {
            acumulador += (numero / p1 );

        } else {
            alert('La nota NO es Valida!')

        }
    }


    return acumulador;
}