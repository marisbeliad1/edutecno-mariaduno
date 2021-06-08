//declaracion de variables//
var num1 = prompt("Ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");

//vista de datos//
document.write("La suma es: ");
document.write(parseInt(num1)+parseInt(num2));
document.write(" ");
document.write("<br> La resta es: ");
document.write(parseInt(num1)-parseInt(num2));
document.write(" ");
document.write("<br> La multiplicación es: ");
document.write(parseInt(num1)*parseInt(num2));
document.write(" ");
document.write("<br> La división es: ");
document.write(parseInt(num1)/parseInt(num2));
document.write("<br> El valor absoluto del primer numero es: ");
document.write(Math.abs(num1));