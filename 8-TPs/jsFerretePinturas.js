/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

    var F;
    var C;

    F = parseFloat(document.getElementById("Temperatura").value); 

    C = (F - 32) * 5 / 9;

    alert(F + " Fahrenheit son " + C + " Centígrados");
    
}

function CentigradosFahrenheit () 
{
    var C;
    var F;

    C = parseFloat(document.getElementById("Temperatura").value);

    F = 32 + (9 * C / 5);

    alert(C + " Centígrados son " + F + " Fahrenheit");
    

    
}
