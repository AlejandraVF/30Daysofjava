// 1.- 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.

let oracion = "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.";
console.log(oracion.match("amor"));

//2 .- Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

let oracion2 = "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(oracion2.match("porque"));

// 3.- Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
// const sentence =   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

//primero limpiamos el texto

const texto = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching".replace(/[^\w\s]/gi, '');

console.log(texto);
// Limpiar el texto
//const cleanedText = sentence.replace(/[^\w\s]/gi, '');

// separar palabras
let palabras = texto.split(' ');

// Ccontar cuantas veces aparece cada palabra
let palabrasContadas = palabras.reduce((counts, word) => {
  const lowercaseWord = word.toLowerCase();
  counts[lowercaseWord] = (counts[lowercaseWord] || 0) + 1;
  return counts;
}, {});

// Encontrar la palabra más frecuente
let maxCount = 0;
let mostFrequentWord = '';

for (const word in palabrasContadas) {
  if (palabrasContadas[word] > maxCount) {
    maxCount = palabrasContadas[word];
    mostFrequentWord = word;
  }
}

console.log("Palabra más frecuente:", mostFrequentWord);

/*Encontrar la palabra mas frecuente

const palabras = texto.split(' ');
console.log(palabras);
console.log(palabras.mostFrequentWord);
let mostFrequentWord = '';
const wordCounts = {};
let maxCount = 0;


palabras.forEach(word => {
  word = word.toLowerCase();
  if (wordCounts[word]) {
    wordCounts[word]++;
    if (wordCounts[word] > maxCount) {
      maxCount = wordCounts[word];
      mostFrequentWord = word;
    }
  } else {
    wordCounts[word] = 1;
  }
});

console.log("Palabra más frecuente:", mostFrequentWord);
*/


