
'use strict';
let numero = 3;
function calcular() {
    
    sumar(numero);
}


function calcular1() {
        
    sumar1(numero);
}

function calcular2() {
        
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

    let nombre1='Hugo';
    let edad1=22;
    let nombre2='Paco';
    let edad2=12;
    let nombre3='Luis';

    for(let i = 0; i <= p1; i++){
        
        
        if(edad2 < 18)
            {
                document.getElementById('name').innerHTML='Ciclo '+i+' Nombre = '+nombre2+' Edad = '+edad2;
                break;
            }else if(edad2 < 18){
                document.getElementById('name').innerHTML='Ciclo '+i+' Nombre = '+nombre2+' Edad = '+edad2;
            }              
            

        
        

        
    }

    return 0;
}