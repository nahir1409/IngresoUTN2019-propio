function Mostrar()
{
var numero;
    var contador=0;
    
    numero = parseInt(prompt("ingrese un número positivo."));
    
      while (numero <=0 || isNaN(numero)) {

          numero = parseImt(prompt("Error. ingrese un número positivo."));
      }

    for ( var i=1; i<= numero ; i++ ) 
    {
          if (i%2==0){
              //contar y mostrar
              contador++;
              console.log(i);
          }
    
      
    }

console.log("Cantidad de pares: " + contador);



}//FIN DE LA FUNCIÓN
