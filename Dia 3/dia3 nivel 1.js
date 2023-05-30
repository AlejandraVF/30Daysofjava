// 1.- Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.

let nombre = "Ale";
let apellido = "Fillagomez";
let pais = "Bolivia";
let ciudad = "Santa Cruz";
let edad = 31;
let estado = false;
let año = 2023;

console.log(typeof nombre); // "string"
console.log(typeof apellido); // "string"
console.log(typeof pais); // "string"
console.log(typeof ciudad); // "string"
console.log(typeof edad); // "number"
console.log(typeof estado); // "boolean"
console.log(typeof año); // "number"

// 2.- Verifique si typeof '10' es igual a 10

console.log(typeof '10' === typeof 10); // false

// 3.- Verifique si parseInt('9.8') es igual a 10

console.log(parseInt('9.8') === 10); // true

/*4.- Verifique cualquier valor booleano true o false.
- Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero. 
- Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
*/
console.log(typeof true); 
console.log(typeof false);

// Declaraciones que proporcionan un valor verdadero
console.log(Boolean(10)); // true
console.log(5 > 2); // true
console.log('hello' !== 'world'); // true

// Declaraciones que proporcionan un valor falso
console.log(Boolean(0)); // false
console.log(10 < 2); // false
console.log('hello' === 'world'); // false

// 5.- Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

// Calcula el resultado de las expresiones de comparación
let comparacion1 = 4 > 3;
let comparacion2 = 4 >= 3;
let comparacion3 = 4 < 3;
let comparacion4 = 4 <= 3;
let comparacion5 = 4 == 4;
let comparacion6 = 4 === 4;
let comparacion7 = 4 != 4;
let comparacion8 = 4 !== 4;
let comparacion9 = 4 != '4';
let comparacion10 = 4 == '4';
let comparacion11 = 4 === '4';

// Confirma los resultados usando console.log()
console.log(comparacion1); 
console.log(comparacion2); 
console.log(comparacion3); 
console.log(comparacion4); 
console.log(comparacion5); 
console.log(comparacion6); 
console.log(comparacion7); 
console.log(comparacion8); 
console.log(comparacion9); 
console.log(comparacion10); 
console.log(comparacion11); 

// Encuentra la longitud de 'Python' y 'jargon'
let pythonLength = 'Python'.length;
let jargonLength = 'jargon'.length;

// Realiza una declaración de comparación falsa
let comparacion12 = pythonLength < jargonLength;

console.log(comparacion12); // false

/* 6.- Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
No hay 'on' tanto en dragon como en python  */

4 > 3 && 10 < 12     //Verdadero (true)
4 > 3 && 10 > 12    // Falso (false)
4 > 3 || 10 < 12     //Verdadero (true)
4 > 3 || 10 > 12     //Verdadero (true)
!(4 > 3)            //Falso (false)
!(4 < 3)           // Verdadero (true)
!(false)             //Verdadero (true)
!(4 > 3 && 10 < 12)  //Falso (false)
!(4 > 3 && 10 > 12)  //Verdadero (true)
!(4 === '4')         //Verdadero (true)
"No hay 'on' tanto en dragon como en python"    //Verdadero (true)

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
console.log('dragon'.includes('on') && 'python'.includes('on')); // false

/*7.-Utilice el objeto Date para realizar las siguientes actividades

¿Qué año es hoy?
¿Qué mes es hoy con un número?
¿Qué fecha es hoy?
¿Qué día es hoy con un número?
¿Cuál es la hora actual?
¿Cuántos minutos hay actualmente?
Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.  */

// Obtener la fecha y hora actual
const now = new Date();

// Obtener el año actual
const año7 = now.getFullYear();
console.log('Año actual:', año7);

// Obtener el mes actual (0-11)
const month = now.getMonth();
console.log('Mes actual:', month);

// Obtener la fecha actual
const date = now.getDate();
console.log('Fecha actual:', date);

// Obtener el día actual (0-6, donde 0 es domingo)
const day = now.getDay();
console.log('Día actual:', day);

// Obtener la hora actual (formato de 24 horas)
const hours = now.getHours();
console.log('Hora actual:', hours);

// Obtener los minutos actuales
const minutes = now.getMinutes();
console.log('Minutos actuales:', minutes);

// Obtener el número de segundos transcurridos desde el 1 de enero de 1970
const secondsSince1970 = Math.floor(now.getTime() / 1000);
console.log('Segundos transcurridos desde el 1 de enero de 1970:', secondsSince1970);






