function Mostrar()
{
//tomo la edad  

var edad;
var estado;



edad = parseInt(document.getElementById("edad").value);
estado = parseInt(document.getElementById("estadoCivil").value);

if (edad <18 && estado != "soltero")
{
    alert("Es muy pequeño para NO ser soltero");
}
}//FIN DE LA FUNCIÓN