//declaracion de variables//
var Celcius = prompt("Ingrese una temperatura en grados celciuos");
const Kelvin= 273.5;

//vista de datos//
document.write("La temperatura en gragos Kelvin es: ");
document.write(parseInt(Celcius)+parseInt(Kelvin));
document.write(" ");

document.write("<br>La temperatura en gragos Fahrenheit es: ");
document.write(parseInt(((Celcius)*9)/5)+32);
document.write(" ");