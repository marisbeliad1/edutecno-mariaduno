//Declaración de variables//
//Variables personales
var apellido = prompt("¿Cuál es tu Apellido?")
var nombre = prompt("¿Cuál es tu Nombre?")
var Carrera = prompt("¿Cuál es el nombre de la carrera que cursa?")

//variables tabla//
var R1 = prompt("Nombre del primer ramo")
var R1C1 = prompt("Ingrese calificación 1")
var R1C2 = prompt("Ingrese calificación 2")
var R1C3 = prompt("Ingrese calificación 3")
//promedio ramo 1
var promr1 =  ((parseFloat(R1C1) + parseFloat(R1C2) + parseFloat(R1C3)) /3).toFixed(2)
var R2 = prompt("Nombre del segundo ramo")
var R2C1 = prompt("Ingrese calificación 1")
var R2C2 = prompt("Ingrese calificación 2")
var R2C3 = prompt("Ingrese calificación 3")
//PROMEDIO R2
var Promr2 =  ((parseFloat(R2C1) + parseFloat(R2C2) + parseFloat(R2C3)) /3).toFixed(2)

var R3 = prompt("Nombre del tercer ramo")
var R3C1 = prompt("Ingrese calificación 1")
var R3C2 = prompt("Ingrese calificación 2")
var R3C3 = prompt("Si se acoge al art 73 del reglamento de estudiantes, escriba - ")




//vista datos
document.write("<div class='container'>")
document.write("Nombre: " + apellido +" "+ nombre)
document.write("<br> Carrera: " + Carrera )
//tabla//
document.write("<table class='table'>")
// identificadores de la tabla
document.write("<thead>")
document.write("<tr>")
document.write("<th scope='col'>Ramo</th>")
document.write("<th scope='col'>Nota 1</th>")
document.write("<th scope='col'>Nota 2</th>")
document.write("<th scope='col'>Nota 3</th>")
document.write("<th scope='col'>Promedio</th>")
document.write("</tr>")
document.write("</thead>")
//fila 1
document.write("<tbody>")
document.write("<tr>")
document.write("<td>" + R1 + "</td>")
document.write("<td>" + R1C1 + "</td>")
document.write("<td>" + R1C2 +"</td>")
document.write("<td>" + R1C3 + "</td>") 
document.write("<td>" + promr1 + "</td>")
document.write("<tr>")
document.write("</tbody>")
// fila 2
document.write("<tbody>")
document.write("<tr>")
document.write("<td>" + R2 + "</td>")
document.write("<td>" + R2C1 + "</td>")
document.write("<td>" + R2C2 + "</td>")
document.write("<td>" + R2C3 + "</td>") 
document.write("<td>" + promr2 + "</td>")
document.write("<tr>")
document.write("</tbody>")
//fila3
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
