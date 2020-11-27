
'use strict'

let numero = 3;
let nombre1=['Hugo',22];
let nombre2=['Paco',12];
let nombre3=['Luis',30];
let basePersonas=[nombre1,nombre2,nombre3];
function calcular() {
    
    sumar(numero);
}


function calcular1() {
        
    sumar1(numero);
}

function calcular2() {
        
    sumar2(basePersonas);
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


function sumar2(basePersonas) {  

    
    
   
    

    for(let c = 0; c < basePersonas.length; c++){
        
      
        if(basePersonas[0][c]< 12){
            console.log(basePersonas[0][c]);
        }           
        

      }
        


        
        /*if(edad2 < 18){
                document.getElementById('name').innerHTML='Ciclo '+i+' Nombre = '+nombre2+' Edad = '+edad2;
                break;
        }else if(edad2 < 18){
                document.getElementById('name').innerHTML='Ciclo '+i+' Nombre = '+nombre2+' Edad = '+edad2;
        } */             
            

        
        

        
    }

    return 0;
}