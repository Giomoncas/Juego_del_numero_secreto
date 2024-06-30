/*
//funcion que muestra en consola Hola Mundo

function holaMundo() 
{
    console.log('Hola Mundo!');
    return;
}

holaMundo(); //llamar a la funcion

//funcion que recibe un nombre como parametro y muestra en consola un texto con ese nombre
function nombreParametro(nombre) 
{
    console.log(`¡Hola, ${nombre}!`); 
    return;   
}

nombreParametro('Pedro'); // llamar a la funcion

//funcion que recibe un numero de parametro y devuelve el doble

function numeroDoble(numero) 
{
    let numDoble = numero * 2;
    console.log(numDoble);
    return;
}
numeroDoble(78);// llamar a la funcion

//funcion que recibe 3 numero de parametro y devuelve su promedio
function promedio(num1,num2,num3) 
{
    let numPromedio = ((num1+num2+num3)/3);
    console.log(numPromedio);
    return;
}

promedio(10,20,30);// llamar a la funcion

//funcion que recibe dos numeros como parametros y devuelve el mayor de ellos
function numMayor(num1,num2) 
{
    if(num1 > num2)
    {
       console.log(`El numero mayor es ${num1}`);
    }
    else if(num1 == num2)
    {
        console.log('Los numeros son iguales');
    }
    else
    {
        console.log(`El numero mayor es ${num2}`);
    }
    return;
}

numMayor(9,4);// llamar a la funcion

//funcion que recibe un numero como parametro y devulve el numero multiplicado por si mismo
function numMultiplicado(numero) 
{
    let resultado = numero * numero;
    console.log(`El resultado de la multiplicacion es ${resultado}`);
    return;
}

numMultiplicado(98);// llamar a la funcion
*/

//Funcion que calcula el indice de masa corporal
function masaCorporal(peso, estatura) 
{
    let imc = (peso / (estatura * estatura));
    console.log(`Su indice de masa corporal es: ${imc}`);
    return;
}

masaCorporal(84,1.72);

//funcion que calcula el factorial de un numero

function factorial(num) 
{
    let result = num;
    if (num === 0 || num === 1)
    { 
      return 1;
    } 
    while (num > 1) 
    { 
      num--;
      result *= num;
    }
    console.log(result);
    return;
  }

  factorial(5);

  //funcion que convierte dolares a pesos colombianos

  function convertidorMoneda(dolares) 
  {
      let valorDolar = 4178.55;
      let resultado = valorDolar * dolares;
      console.log(`El valor en pesos es:$${resultado}`);
      return;
  }

  convertidorMoneda(100);

  //funcion que halla el area de un rectangulo

  function area(base, altura) 
  {
        let resultado = base * altura;
        console.log(`El área del rectangulo es: ${resultado}`)    ;
        return;
  }

  area(10,15);

  //funcion que halla el area y el perimetro de un circulo recibiendo el radio como parametro

  function areaPerimetro(radio) 
  {
      let pi = 3.1416;
      let area = (pi * (radio ** 2));
      let perimetro = (2 * pi * radio);
      console.log(`El área del circulo es: ${area} y el perimetro es: ${perimetro}`);
      return;
  }

  areaPerimetro(2);