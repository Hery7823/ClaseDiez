

let cantidad = 10;

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
    let acumulador = 0;
    let numero = 0;
    while (contador < p1) {
        numero = Number(prompt('Digite Numero '+(contador + 1)));
        if (numero > 0 ) {
            contador++;
            document.getElementById('resultado').value+=numero+', ';


        } 
        else if(numero == 0){
            contador++;
            document.getElementById('resultado1').value+=numero+', ';
        }
        else{
            contador++;
            document.getElementById('resultado2').value+=numero+', ';

        }
    }

  
return acumulador;
}


function sumar1(p1) {
    let contador = 0;
    let acumulador = 0;
    let numero = 0;
    do {
        numero = Number(prompt('Digite numero ' + (contador + 1)));
        if (numero > 0) {
            contador++;
            document.getElementById('resultado').value+=numero+', ';

        } else {
            alert('El Numero es negativo')

        }
    } while (contador < p1)
return acumulador;
}


function sumar2(p1) {
    let acumulador = 0;
    let numero = 0;

    for (let i = 0; i < p1; i++) {
        numero = Number(prompt('Digite Numero positivo ' + (i + 1)));
        if (numero > 0 ) {
            document.getElementById('resultado').value+=numero+', ';
            

        } else {
            alert('El numero es negativo!')

        }
    }
return acumulador;
}