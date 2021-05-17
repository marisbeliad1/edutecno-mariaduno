//Declaración de variables//
//Variables personales
var apellido = prompt("Ingrese Apellidos")
var nombre = prompt("Ingrese Nombres")
var Carrera = prompt("Ingrese Nombre de la Carrera")

//variables tabla//
var R1 = prompt("Nombre del primer ramo")
var R1C1 = prompt("Ingrese calificacion 1 de "+(R1)+"")
var R1C2 = prompt("Ingrese calificacion 2  de "+(R1)+"")
var R1C3 = prompt("Ingrese calificacion 3  de "+(R1)+"")
var R2 = prompt("Nombre del segundo ramo")
var R2C1 = prompt("Ingrese calificacion 1 de "+(R2)+"")
var R2C2 = prompt("Ingrese calificacion 2 de "+(R2)+"")
var R2C3 = prompt("Ingrese calificacion 3 de "+(R2)+"")
var R3 = prompt("Nombre del tercer ramo")
var R3C1 = prompt("Ingrese calificacion 1 "+(R3)+"")
var R3C2 = prompt("Ingrese calificacion 2 "+(R3)+"")
var R3C3 = prompt("Si se acoge al art 73 del reglamento de estudiantes, escriba - ")

var promr1 =  ((parseFloat(R1C1) + parseFloat(R1C2) + parseFloat(R1C3)) /3).toFixed(2)

var Promr2 =  ((parseFloat(R2C1) + parseFloat(R2C2) + parseFloat(R2C3)) /3).toFixed(2)

//vista datos
document.write("<div class='container'>")
document.write("Nombre: " + apellido +" "+ nombre)
document.write("<br> Carrera: " + Carrera )
document.write("<table class='table'>")
document.write("<thead>")
document.write("<tr>")
document.write("<th scope='col'>Ramo</th>")
document.write("<th scope='col'>Nota 1</th>")
document.write("<th scope='col'>Nota 2</th>")
document.write("<th scope='col'>Nota 3</th>")
document.write("<th scope='col'>Promedio</th>")
document.write("</tr>")
document.write("</thead>")

document.write("<tbody>")
document.write("<tr>")
document.write("<td>" + R1 + "</td>")
document.write("<td>" + R1C1 + "</td>")
document.write("<td>" + R1C2 +"</td>")
document.write("<td>" + R1C3 + "</td>") 
document.write("<td>" + promr1 + "</td>")
document.write("<tr>")
document.write("</tbody>")
document.write("<tbody>")

document.write("<tr>")
document.write("<td>" + R2 + "</td>")
document.write("<td>" + R2C1 + "</td>")
document.write("<td>" + R2C2 + "</td>")
document.write("<td>" + R2C3 + "</td>") 
document.write("<td>" + promr2 + "</td>")
document.write("<tr>")
document.write("</tbody>")

document.write("<tbody>")
document.write("<tr>")
document.write("<td>" + R3 + "</td>")
document.write("<td>" + R3C1 + "</td>")
document.write("<td>" + R3C2 + "</td>")
document.write("<td>" + R3C3 + "</td>")
document.write("<th scope='col'>-</th>")
document.write("<tr>")
document.write("</tbody>")

document.write("</table>")

var Promr3 = (12 - (parseFloat(R3C1) + parseFloat(R3C2))).toFixed(2)
//descrpción final
document.write("<br> Para Aprobar el Ramo JavaScript con nota 4, necesitas obtener un " + Promr3 + " en la Nota 3.")

document.write("</div>")
