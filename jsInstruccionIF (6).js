function Mostrar()
{
//tomo la edad  

var edad;


//primer intento
/*edad = parseInt(document.getElementById("edad").value);

if (edad >= 18)
{
    alert("Es mayor de edad");
}

if (edad >= 13 && edad <18)
{
    alert("Es un adolescente");
}
else{
    alert("Eres un niño");
}*/

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
