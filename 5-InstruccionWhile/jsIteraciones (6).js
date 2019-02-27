function Mostrar()
{

	/*var contador=0;
	var acumulador=0;
	var numero;

while (contador <5) {
	numero = parseInt(promt("Ingrese un numero: "));
	acumulador = acumulador + numero;
	contador++;
}
alert(acumulador);



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;*/
	
	
	
	
	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

while (contador <5) {
	numero = parseInt(prompt("Ingrese un numero: "));
	acumulador = acumulador + numero;
	contador++;
}

promedio = acumulador / 5;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN
