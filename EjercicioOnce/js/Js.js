


let notas=0;
let respuesta=''
let contador=0;
let acumulador = 0;

function calcular()
{
    while( contador >= 0 )
    {
    
        respuesta = prompt('¿Deseas ingresar tus notas? S/N');  

        if(respuesta.toUpperCase() == 'S')
        {
            contador +=1;
            acumulador+=  parseFloat(prompt('Ingresa nota N° '+contador));
            
            
        } 
        
        if(  respuesta.toUpperCase() == 'N' )
        {
            
            document.getElementById('resultado').innerHTML+='Tú promedio de notas: '+(acumulador/contador).toFixed(2); 
            alert('¡¡Hasta pronto!!');
         
            break;
            
            
        }  
    }
    
    
    
}


function calcular1() 
{
    
    do
    {  
        
        respuesta = prompt('¿Deseas ingresar tus notas? S/N');  

        if(respuesta.toUpperCase() == 'S')
        {
            contador +=1;
            acumulador+=  parseFloat(prompt('Ingresa nota N° '+contador));
            
            
        } 
        
        if(  respuesta.toUpperCase() == 'N' )
        {
            
            document.getElementById('resultado').innerHTML+='Tú promedio de notas: '+(acumulador/contador).toFixed(2); 
            alert('¡¡Hasta pronto!!');
         
            break;
            
            
        }   
                 

         
    }while( contador > 0 )
    
}

function calcular2() 
{


    for(;;)
    {
        
        respuesta = prompt('¿Deseas ingresar tus notas? S/N');  

        if(respuesta.toUpperCase() == 'S')
        {
            contador +=1;
            acumulador+=  parseFloat(prompt('Ingresa nota N° '+contador));
            
            
        }
        
        if(  respuesta.toUpperCase() == 'N' )
        {
            
            document.getElementById('resultado').innerHTML+='Tú promedio de notas: '+(acumulador/contador).toFixed(2); 
            alert('¡¡Hasta pronto!!');
         
            break;
            
            
        }   
    }    
}