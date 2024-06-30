let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto)
{
     let elemenemtoHTML = document.querySelector(elemento);
     elemenemtoHTML.innerHTML = texto;
     return;  //es normal que una funcion retorne algo, una buena practica es colocarlo asi no retorne nada
}

//decaración de una funcion

function verificarIntento()
{
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     
     console.log(intentos);
     if(numeroDeUsuario === numeroSecreto)
     {
          asignarTextoElemento('p',`¡Acertaste el Numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
          document.getElementById('reiniciar').removeAttribute('disabled');
     }
     else
     {
          //el usuario no acerto
          if(numeroDeUsuario > numeroSecreto)
          {
               asignarTextoElemento('p','El numero secreto es menor');   
          }
          else
          {
               asignarTextoElemento('p','El numero secreto es mayor');   
          }
          intentos++;
          limpiarCaja();          
     }
     return;     
}

function limpiarCaja() 
{
     let valorCaja = document.querySelector('#valorUsuario').value = '';
     
}
function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
     //validar si ya sorteamos todos los numeros
     if(listaNumerosSorteados.length == numeroMaximo)
     {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
     }
     else
     {     
       // si el numero generado esta incluido en la lista 
       if(listaNumerosSorteados.includes(numeroGenerado))  //recorre la lista y verifica si el numero sorteado ya esta en ella
       {
          return generarNumeroSecreto();   //recursividad, una funcion se llama asi misma
       }
        else{
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
         }
     }
     
}

function condicionesIniciales() 
{
     asignarTextoElemento('h1','GRAN JUEGO DEL NUMERO SECRETO');
     asignarTextoElemento('P',`Por favor selecciona un número del 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
     intentos = 1;

}

function reiniciarJuego(params) 
{
     //limpiar la caja
     limpiarCaja();
     //indicar mensaje de intervalo de numeros     
     //generar el numero aleatorio     
     //inicializar el numero de intentos
     condicionesIniciales();
     //Deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();