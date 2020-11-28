


let respuesta='';

let contador=0;

function calcular()
{
    while( contador <= 0 )
    {
    
        respuesta = prompt('Por favor desea contininuar? teclee S/N');         

        if(  respuesta.toUpperCase() == 'N' )
        {
            
            document.getElementById('name').innerHTML='¡¡Hasta pronto!!';
            document.getElementById('resultado').innerHTML+=' Su respuesta: '+respuesta; 
            break;
            
        } 
    }
    
    
    
}


function calcular1() 
{
    
    do
    {    
        respuesta = prompt('Por favor desea contininuar? teclee S/N');         

        if(  respuesta.toUpperCase() == 'N' )
        {
            
            document.getElementById('name').innerHTML='¡¡Hasta pronto!!';
            document.getElementById('resultado').innerHTML+=' Su respuesta: '+respuesta; 
            break;
            
        } 
    }while( contador <= 0 )
    
}

function calcular2() 
{

    for(;;)
    {
        respuesta = prompt('Por favor desea contininuar? teclee S/N');         

        if(  respuesta.toUpperCase() == 'N' )
        {
            
            document.getElementById('name').innerHTML='¡¡Hasta pronto!!';
            document.getElementById('resultado').innerHTML+=' Su respuesta: '+respuesta; 
            break;
            
        }   
    }    
}