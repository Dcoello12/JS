// Tasca 1
// Imprimeix la taula de multiplicar del 9, utilitzant un bucle.

function tabla9(j){
  document.write("<h1>Bucle: Exemple 2</h1>");

	document.write("<h2>Tabla de multiplicar del "+ j +"</h2>");

	document.write("<ul>");
	//i++ significa i=i+1;

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(j + "x " + i + "= " + j * i);
		document.write("</li>");
	}

	document.write("</ul>");
}

tabla9(9);

//Tasca 2
//Imprimeix la taula de multiplicar del 5 a la inversa, utilitzant un bucle.

function tabla5(k){
  document.write("<h2>Tabla de multiplicar del "+ k +" al reves</h2>");

  document.write("<ul>");
  for(f = 10;f>=1;f--){
		document.write("<li>");
		document.write(k + "x " + f + "= " + k * f);
		document.write("</li>");
}

  document.write("</ul>");
}

tabla5(5);

//Tasca 3
//Imprimeix totes les taules de multiplicar, utilitzant dos o més bucles.

//TASCA 3
//Imprimeix totes les taules de multiplicar, utilitzant dos o més bucles.

function generarTablas()
{
 var numTablas=document.getElementById('genera').value;
 document.write('<table>');
 for (var i=1; i<=12; i++)
 {
   document.write('<tr>');
  for (var j=1; j<=numTablas; j++)
  {
   document.write('<td>');
   document.write(j + " x " + i + " = "+i*j);
   document.write('</td>');
   document.write('<td>     </td>');
  }
   document.write('</tr>');
 }
  document.write('</table>');
}
 document.write('¿Fins a quina taula de multiplicar vols generar?');
 document.write('<input type="text" name="genera", id="genera" />');
 document.write('<input type="button"  value="Genera" onclick="generarTablas()"/>');
