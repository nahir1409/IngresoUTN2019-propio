function Mostrar()
{
	// declarar variables

	var numero;
	var maximo;
	var minimo;
	var contador=0;
	var respuesta='si';

/*	while(respuesta!='no')
	{			
	}while (respuesta == "si");*/


    do
	{
		numero = parseInt(prompt("Ingrese un número: "));

		while (isNaN(numero)) 
		{
			numero = parseInt(prompt("Esto no es un número. Ingrese un número: "));
		} 

		if (maximo >=numero) 
		{

		}
		else 
		{
          minimo
		}

		respuesta = prompt("¿Desea continuar?");
		
	}while (respuesta == "si");


	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
	
	




}//FIN DE LA FUNCIÓN
