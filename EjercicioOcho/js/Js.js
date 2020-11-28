

let codigo = 0;
let contrasena=0;
function calcular() {
    codigo = Number(prompt('Ingrese el codigo de usuario'));   
    contrasena = Number(prompt('Ingrese la contraseña de usuario')); 
    sumar(codigo,contrasena);
}


function calcular1() {
    codigo = Number(prompt('Ingrese el codigo de usuario'));   
    contrasena = Number(prompt('Ingrese la contraseña de usuario')); 
    sumar1(codigo,contrasena);
}

function calcular2() {

    codigo = Number(prompt('Ingrese el codigo de usuario'));   
    contrasena = Number(prompt('Ingrese la contraseña de usuario')); 
    sumar2(codigo,contrasena);

    
    
}


function sumar(p1,p2) {

    let contador = 0;
      

    while (contador <= 2) {

        if(p1 == 1 && p2 == 1234 ){

            alert(' !Usuario identificado!');
            document.getElementById('resultado').innerHTML='Bienvenido usuario # 1 '
            break;

        }else{

            p1 = Number(prompt('Ingrese el codigo de usuario intento numero: '+(contador+1)+' # max. intentos 3'));   
            p2 = Number(prompt('Ingrese la contraseña de usuario'));  
            contador++
        } 

        
           
    }

    return 0;
}


function sumar1(p1,p2) {

    let contador = 0;
        

    do {        
        if(p1 == 1 && p2 == 1234 ){

            alert(' !Usuario identificado!');
            document.getElementById('resultado').innerHTML='Bienvenido usuario # 1 '
            break;

        }else{

            p1 = Number(prompt('Ingrese el codigo de usuario intento numero: '+(contador+1)+' # max. intentos 3'));   
            p2 = Number(prompt('Ingrese la contraseña de usuario'));  
            contador++
        } 
        
    
    } while (contador <= 3)

    return 0;
}


function sumar2(codigo,contrasena) {

    for(let i = 0; i < 3; i++){
        
        if(codigo == 1 && contrasena == 1234 ){

            alert(' !Usuario identificado!');
            document.getElementById('resultado').innerHTML='Bienvenido usuario # 1 '
            break;

        }else{

            codigo = Number(prompt('Ingrese el codigo de usuario intento numero: '+(i+1)+' # max. intentos 3'));   
            contrasena = Number(prompt('Ingrese la contraseña de usuario'));  
        } 
    } 

   

    return 0;
}