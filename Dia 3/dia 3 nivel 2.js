// 1.- Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

let base = prompt("Ingrese la base del triángulo:");
let altura = prompt("Ingrese la altura del triángulo:");
base = parseFloat(base);
altura = parseFloat(altura);
const area = 0.5 * base * altura;
console.log("El área del triángulo es:", area);

// 2.- Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

let ladoA = prompt("Ingrese el lado a del triángulo:");
let ladoB = prompt("Ingrese el lado b del triángulo:");
let ladoC = prompt("Ingrese el lado c del triángulo:");
ladoA = parseFloat(ladoA);
ladoB = parseFloat(ladoB);
ladoC = parseFloat(ladoC);
const perimetro = ladoA + ladoB + ladoC;
console.log("El perímetro del triángulo es:", perimetro);

// 3.- 

let largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));

let areaRectangulo = largo * ancho;
let perimetroRectangulo = 2 * (largo + ancho);

console.log("El área del rectángulo es:", areaRectangulo);
console.log("El perímetro del rectángulo es:", perimetroRectangulo);

// 4.-

let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

let areaCirculo = Math.PI * radio * radio;
let circunferencia = 2 * Math.PI * radio;

console.log("El área del círculo es:", areaCirculo);
console.log("La circunferencia del círculo es:", circunferencia);

// 5.-

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

// 6
let pendiente = (y2 - y1) / (x2 - x1);
console.log("La pendiente entre los puntos (2, 2) y (6, 10) es:", pendiente);

// 7

if (pendiente === 2) {
  console.log("La pendiente del rectángulo es igual a la pendiente entre los puntos (2, 2) y (6, 10).");
} else {
  console.log("La pendiente del rectángulo es diferente a la pendiente entre los puntos (2, 2) y (6, 10).");
}

// 8

let x = parseFloat(prompt("Ingrese el valor de x:"));
let y = x * x + 6 * x + 9;

console.log("El valor de y en la ecuación y = x^2 + 6x + 9 es:", y);

//9 

let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas:"));
let tarifaPorHora = parseInt(prompt("Ingrese la tarifa por hora:"));

let salario = horasTrabajadas * tarifaPorHora;

console.log("El salario de la persona es:", salario);

//10

let nombre = prompt("Ingrese su nombre:");

if (nombre.length > 7) {
  console.log("Su nombre es largo");
} else {
  console.log("Su nombre es corto");
}

//11
let firstName = "Asabeneh";
let lastName = "Yetayeh";

let lengthFirstName = firstName.length;
let lengthLastName = lastName.length;

if (lengthFirstName > lengthLastName) {
  console.log("El nombre es más largo que el apellido");
} else if (lengthFirstName < lengthLastName) {
  console.log("El apellido es más largo que el nombre");
} else {
  console.log("El nombre y el apellido tienen la misma longitud");
}

//12
let myAge = 250;
let yourAge = 25;

//13

let currentYear = new Date().getFullYear();
let birthYear = prompt("Introduce el año de nacimiento:");

let age = currentYear - birthYear;

if (age >= 18) {
  console.log(`Tienes ${age} años. Tienes la edad suficiente para conducir.`);
} else {
  let remainingYears = 18 - age;
  console.log(`Tienes ${age} años. Podrás conducir después de ${remainingYears} años.`);

}

//14 
let años = prompt("Ingrese el número de años de vida:");
let segundosPorAño = 365 * 24 * 60 * 60; // segundos en un año

let totalSegundos = años * segundosPorAño;

console.log(`Viviste ${totalSegundos} segundos.`);

// 15
//Formato YYYY-MM-DD HH:mm:

let date1 = new Date();
let formattedDate1 = date.toLocaleString('es', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });

console.log(formattedDate1);

//Formato DD-MM-YYYY HH:mm:
let date2 = new Date();
let formattedDate2 = date.toLocaleString('es', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

console.log(formattedDate2);

//Formato DD/MM/YYYY HH:mm:
let date3 = new Date();
let formattedDate3 = date.toLocaleString('es', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', dateStyle: 'short' });

console.log(formattedDate3);









