//1.- Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.

let desafío = '30 días de JavaScript';

//2.- Imprima la cadena en la consola del navegador usando console.log()

console.log(desafío); 

//3.- Imprima la longitud de la cadena en la consola del navegador usando console.log()

console.log(desafío.length); 

//4.- Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()

console.log(desafío.toUpperCase()); 

//5.- Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()

console.log(desafío.toLowerCase()); 

//6.- Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()

console.log(desafío.substr(0, 2)); 
console.log(desafío.substr(3, 5)); 
console.log(desafío.substr(11)); 

//7.-Corta la frase Days Of JavaScript de 30 Days Of JavaScript.

console.log(desafío.substr(0, 2)); 
console.log(desafío.substr(8)); 

//8.- Verifique si la cadena contiene una palabra Script usando el método includes()

console.log(desafío.includes('Script')); 

//9.- Divide la cadena en un array usando el método split()

console.log(desafío.split('')); 

// 10.-Divida la cadena 30 días de JavaScript en el espacio usando el método split()

console.log('30 días de JavaScript'.split(' ')); 

//11.- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.

let cadena = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let matriz = cadena.split(', ');
console.log(matriz);

//12.- Cambie 30 días de JavaScript a 30 días de Python usando el método replace().

desafío = desafío.replace('JavaScript', 'Python');
console.log(desafío);

//13.- ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().

console.log('30 días de JavaScript'.charAt(15));

//14.- ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()

console.log('30 días de JavaScript'.charCodeAt(11));

//15.- Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript

console.log('30 días de JavaScript'.indexOf('a'));

//16.- Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.

console.log('30 días de JavaScript'.lastIndexOf('a'));

//17.- Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

console.log('No puedes terminar una oración con porque porque porque es una conjunción'.indexOf('porque'));

//18.- Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

console.log('No puedes terminar una oración con porque porque porque es una conjunción'.lastIndexOf('porque'));

//19.- Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

console.log('No puedes terminar una oración con porque porque porque es una conjunción'.search('porque'));

//20.- Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.

let desafio2 = '     30 días de JavaScript     '
console.log(desafio2.trim());

//21.- Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero

let desafio3 = '30 días de JavaScript'
console.log(desafio3.startsWith('30'));

//22.- Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero

console.log(desafio3.endsWith('t'));

//23.- Usa el método match() para encontrar todos los a en 30 días de JavaScript

console.log(desafio3.match(/a/g));

//24 .- Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'

let oracion3 = "30 días de "
let oracion4 = "JavaScript"
console.log(oracion3.concat(oracion4));

//25.- Use el método repeat() para imprimir 30 días de JavaScript 2 veces

console.log(desafio3.repeat(2));


























