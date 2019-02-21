function Mostrar()
{

//var sexo = prompt("ingrese f ó m .").toLowerCase(); 
//while (!(sexo == "f" || sexo == "m"))
//	{
//	
//  sexo = prompt("Error. Reingrese ingrese f ó m.").toLowerCase();
//
//	}
  
 var sexo = prompt("ingrese f ó m .");


//while ( sexo != "f" && sexo != "m") otra forma correcta de hacerlo
while (!(sexo == "f" || sexo == "m"))
	{	
    sexo = prompt("Error. Reingrese ingrese f ó m.");
	}

document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN
