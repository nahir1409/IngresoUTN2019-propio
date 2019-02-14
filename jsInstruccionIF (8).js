function Mostrar()
{
var edad;
var estado;


/* Mi primer intento, CASI bien

edad = parseInt(document.getElementById("edad").value);
estado = parseInt(document.getElementById("estadoCivil").value);



if (!(edad <18 && estado != "soltero") )
{
	
alert("Es soltero y no es menor.");

}*/

edad = parseInt(document.getElementById("edad").value);
estado = parseIn(document.getElementById("estadoCivil").value);

if ( estado == "soltero" && edad >=18)
{
    alert("Es soltero y no es menor.");
}

}//FIN DE LA FUNCIÓN