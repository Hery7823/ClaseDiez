
'use strict'


function calcular() {
    
    sumar();
}


function calcular1() {
        
    sumar1();
}

function calcular2() 
{
   sumar2();       
    
}


function sumar()
{

    let contador = 0;      

    while (contador < 3)
    {
        let nombre = prompt('Por favor ingrese su nombre: Usuario: '+(contador+1));
        let edad = Number(prompt('Por favor ingrese su edad:'));
        if( edad <18 )
        {
            document.getElementById('resultado').innerHTML='Nombre: '+nombre+' edad: '+edad+'     años Es menor de edad'
            alert('Nombre: '+nombre+' Es menor de edad ');
            break;
        }
        else
        {
            contador++;
        }        
        
    
        if(contador == 3)
        {
            document.getElementById('resultado').innerHTML='No hay menores de edad'
            alert('No hay ningun menor de edad');
        }  
            
    }
    return 0;
}


function sumar1() 
{

    let contador = 0;

    do 
    {        
        let nombre = prompt('Por favor ingrese su nombre: Usuario: '+(contador+1));
        let edad = Number(prompt('Por favor ingrese su edad:'));
        if( edad <18 )
        {
            document.getElementById('resultado').innerHTML='Nombre: '+nombre+' edad: '+edad+'     años Es menor de edad'
            alert('Nombre: '+nombre+' Es menor de edad ');
            break;
        }
        else
        {
            contador++;
        }        
        
    
        if(contador == 3)
        {
            document.getElementById('resultado').innerHTML='No hay menores de edad'
            alert('No hay ningun menor de edad');
        }        
    
    }while (contador < 3)

    return 0;
}




function sumar2() 
{  
    let contador =0;
    for(let i=0; i<3; i++)
    {
      

        let nombre = prompt('Por favor ingrese su nombre: Usuario: '+(contador+1));
        let edad = Number(prompt('Por favor ingrese su edad:'));
        if( edad <18 )
        {
            document.getElementById('resultado').innerHTML='Nombre: '+nombre+' edad: '+edad+'     años Es menor de edad'
            alert('Nombre: '+nombre+' Es menor de edad ');
            break;
        }
        else
        {
            contador++;
        }
        
         
        
        
    } 
    if(contador == 3)
    {
        document.getElementById('resultado').innerHTML='No hay menores de edad'
        alert('No hay ningun menor de edad');
    }
    
        
    return 0; 
}    