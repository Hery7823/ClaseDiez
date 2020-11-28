

let numero = 0;
let factorial=1;
let resultado=0;
let contador=0;

function calcular()
{
    while( contador <= 0 )
    {
    
        numero = parseInt(prompt('Por favor Ingrese el numero Entero y positivo para mostrar su factorial')); 


        if(numero > 0 && Number.isInteger(numero))
        {

               factorial=sumar(numero);                    
        
               document.getElementById('name').innerHTML='El factorial de: '+numero+' es: '+factorial; 
               
               document.getElementById('resultado').innerHTML+=' = '+factorial; 
               contador = 1;
        
        } 
    }
    
    
    
}


function calcular1() 
{
    
    do
    {    
        numero = parseInt(prompt('Por favor Ingrese el numero Entero y positivo para mostrar su factorial')); 

        if(numero > 0 && Number.isInteger(numero))
        {

               factorial=sumar(numero);                    
        
               document.getElementById('name').innerHTML='El factorial de: '+numero+' es: '+factorial; 
               document.getElementById('resultado').innerHTML+=' = '+factorial; 
               contador=1;
        
        } 
    }while( contador <= 0 )
    
}

function calcular2() 
{

    for(;;)
    {
        numero = parseInt(prompt('Por favor Ingrese el numero Entero y positivo para mostrar su factorial')); 

        if( numero > 0 && Number.isInteger(numero))
        {
            resultado = sumar2(numero);
            document.getElementById('name').innerHTML='El factorial de '+numero+' es: '+resultado;
            document.getElementById('resultado').innerHTML+=' = '+resultado; 
            break;
        }  

    } 
    
}


function sumar(p1) 
{

    while(p1 >= 1)
    {
      factorial*=p1;
      factores=p1;
      p1--;                
      contador=1;
      document.getElementById('resultado').innerHTML+=' '+(factores--); 
    }  

    return factorial;
}


function sumar1(p1) 
{
    do
    {
      factorial*=p1;
      factores=p1;
      p1--;                
      contador=1;
      document.getElementById('resultado').innerHTML+=' '+(factores--); 

    }while(p1 >= 1) 

    return factorial;
}


function sumar2(p1) 
{
    let factores =p1;
    for( let i = 1; i <= p1; i++ )
    {
        factorial *= i; 
          
        document.getElementById('resultado').innerHTML+=' '+(factores--);     
    }    

    return factorial;
}