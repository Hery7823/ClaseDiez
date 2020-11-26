

let numero = 0;
function calcular() {
    numero = Number(prompt('Ingrese la tabla del numero deseado'));
    sumar(numero);
}


function calcular1() {
    numero = Number(prompt('Ingrese la tabla del numero deseado'));    
    sumar1(numero);
}

function calcular2() {
    numero = Number(prompt('Ingrese la tabla del numero deseado'));    
    sumar2(numero);
}


function sumar(p1) {

    let contador = 1;
    document.getElementById("name").innerHTML+=p1;    

    while (contador <= 10) {

        document.getElementById('resultado').innerHTML+="| "+contador+"x"+p1+"="+p1*contador+" ";
        contador++;    
    }

    return 0;
}


function sumar1(p1) {

    let contador = 1;
    document.getElementById("name").innerHTML+=p1;    

    do {        
        
        document.getElementById('resultado').innerHTML+="| "+contador+"x"+p1+"="+p1*contador+" ";
        contador++;
    
    } while (contador <= 10)

    return 0;
}


function sumar2(p1) {  

    document.getElementById("name").innerHTML+=p1;

    for(let i = 1; i <= 10; i++){

        document.getElementById('resultado').innerHTML+="| "+i+"x"+p1+"="+p1*i+" ";
    }

    return 0;
}