function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
	var promedio;
	var contadorNeg;

	 do {
		numero = parseInt(prompt("Ingrese un número: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Esto no es un número. Ingrese un número: "));
		}
            if ( numero >= 0) {
				positivo = positivo + numero;
			}
			else  {
				negativo = negativo * numero;
				contadorNeg++;
			}

			respuesta = prompt("¿Desea continuar?");
		
	    }while (respuesta == "si");
	
document.getElementById('suma').value=positivo;
   if (contadorNeg == 0 ) {
	   negativo = 0;
   }
document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN
