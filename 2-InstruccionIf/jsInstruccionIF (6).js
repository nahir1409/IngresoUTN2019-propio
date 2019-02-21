function Mostrar()
{
//tomo la edad  
edad = parseInt(document.getElementById("edad").value);

if (edad <13)
{

    alert("Es un niño");
}

else if (edad >= 13 && edad <=17) 
{
    alert("Es un adolescente");
}
else if (edad >= 18 && edad <=70) 
{
    alert("Es un adulto");
}
else
{
    alert("Es un anciano");
}





}//FIN DE LA FUNCIÓN
