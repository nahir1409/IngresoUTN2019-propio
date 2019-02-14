/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{ /* Paso 1: Etrada de datos.*/
    var sueldo;
    var nuevoSueldo;
    var descuento;

    /*paso 2: Procesar datos.*/

    sueldo = parseInt(document.getElementById("importe").value);
    descuento = sueldo * 25 / 100;
    nuevoSueldo = sueldo - descuento;

    /*Paso 3: Muestro la información*/

    document.getElementById("resultado").value = nuevoSueldo;

    alert("El descuento es de: $" + descuento);

    /*  OTRA FORMA DE RESOLVERLO
    var importe;
    var descuento;
    var importeFinal;
    importe = parseFloat(document.getElemtById("importe").value);
    descuento = importe * 25 / 100;
    alert("El descuebto efectuado es de $: " + descuento");
    document.getElementById("resultado").value = importeFinal;
    */
	
}
