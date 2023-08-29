function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! ¡Bienvenido/a!`);
}


saludar("Cristian Lamadrid");

ejercicio 2

function multiplicar(num1, num2) {
    return num1 * num2;
}


var valor1 = 5;
var valor2 = 3;
var resultado = multiplicar(valor1, valor2);
console.log("El resultado de la multiplicación es: " + resultado);


ejercicio 3



function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}


var baseTriangulo = 5;
var alturaTriangulo = 3;
var lado1Triangulo = 4;
var lado2Triangulo = 5;
var lado3Triangulo = 6;

var area = areaTriangulo(baseTriangulo, alturaTriangulo);
var perimetro = perimetroTriangulo(lado1Triangulo, lado2Triangulo, lado3Triangulo);


console.log("Área del triángulo: " + area);
console.log("Perímetro del triángulo: " + perimetro);

ejercicio 4

function calcularPrecio(precioUnitario, cantidad) {
    var precioTotal = precioUnitario * cantidad;

    if (cantidad >= 20) {
        precioTotal *= 0.8; 
    } else if (cantidad >= 10) {
        precioTotal *= 0.9; 
    }

    return precioTotal;
}


console.log(calcularPrecio(10, 5));   
console.log(calcularPrecio(15, 15));  
console.log(calcularPrecio(25, 25));  

<---ejercicio 5 

function esMayorDeEdad(edad) {
    var mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    return mensaje;
}


console.log(esMayorDeEdad(20)); 
console.log(esMayorDeEdad(15)); 


<---ejercicio 6 
function calcularImpuesto(ingresoAnual) {
    if (ingresoAnual <= 10000) {
        return ingresoAnual * 0.1; 
    } else if (ingresoAnual <= 20000) {
        return ingresoAnual * 0.15; 
    } else {
        return ingresoAnual * 0.2; 
    }
}

console.log(calcularImpuesto(8000)); 
console.log(calcularImpuesto(15000)); 
console.log(calcularImpuesto(25000)); 