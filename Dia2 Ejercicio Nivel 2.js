// 1.- Usando console.log() imprima la siguiente declaración:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.- Usando console.log() imprima la siguiente cita de la Madre Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3.- Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.

let numero1 = "10";
let numero2 = 10;
console.log(typeof(numero1));  //string
console.log(typeof(numero2));  //numero
let numInt = parseInt(numero1);  
console.log(numInt); 
console.log(numero2===numInt);

// 4.- Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.

let numero = parseFloat('9.8');
if (numero === 10) {
  console.log("El número es igual a 10.");
} else {
  numero = 10;
  console.log("Se ha ajustado a 10.");
}

// 5.- Verifique si 'on' se encuentra tanto en Python como en la jerga

let cadena1 = 'Python';
let cadena2 = 'jerga';

let estaPresente = cadena1.includes('on') && cadena2.includes('on');

console.log(estaPresente);

// 6.- Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.

let cadena3 = 'Espero que este curso no esté lleno de jerga';
let estaPresente2 = cadena3.includes('jargon');

console.log(estaPresente2);

// 7.- Genere un número aleatorio entre 0 y 100 inclusive.

let numeroAleatorio1 = Math.floor(Math.random() * 101);
console.log(numeroAleatorio1);

// 8.- Genere un número aleatorio entre 50 y 100 inclusive.

let numeroAleatorio2 = Math.floor(Math.random() * 51) + 50;
console.log(numeroAleatorio2);

// 9 .- Genere un número aleatorio entre 0 y 255 inclusive.

let numeroAleatorio3 = Math.floor(Math.random() * 255);
console.log(numeroAleatorio3);

// 10.- Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.

let cadena = 'JavaScript';
let indiceAleatorio = Math.floor(Math.random() * cadena.length);
let caracterAleatorio = cadena.charAt(indiceAleatorio);

console.log(caracterAleatorio);

/*  11.- Use console.log() y caracteres de escape para imprimir el siguiente patrón.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125  */

console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

// 12.- Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

var oracion = "No puedes terminar una oración con porque porque porque es una conjunción";
var fraseSeparada = oracion.substr(35, 20);

console.log(fraseSeparada);



















