function Mostrar()
{

        var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

    do
	{
		numero = parseInt(prompt("Ingrese un número: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Esto no es un número. Ingrese un número: "));
		}

        acumulador = acumulador + numero;
		acumulador++;
		respuesta = prompt("¿Desea continuar?");
		
	}while (respuesta == "si");

promedio = acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN
