// 1.- Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

let edad = prompt("Ingrese su edad:");
edad = parseInt(edad);

switch (true) {
    case (edad >= 18):
      console.log("Tiene la edad suficiente para conducir");
      break;
    default:
      let añosFaltantes = 18 - edad;
      console.log(`Debe esperar ${añosFaltantes} años para poder conducir`);
      break;
  }


// 2.- Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

let myAge = parseInt(prompt("Ingrese su edad:"));
let yourAge = parseInt(prompt("Ingrese la edad de la otra persona:"));

switch (true) {
  case (myAge > yourAge):
    console.log("Yo soy mayor que tú.");
    break;
  case (myAge < yourAge):
    console.log("Tú eres mayor que yo.");
    break;
  default:
    console.log("Ambos tenemos la misma edad.");
    break;
}

/*3.- Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
Usando if else
operador ternario. 
let a = 4;
let b = 3;
*/ 
//Usando el operador ternario:
let a = 4;
let b = 3;

let resultado = a > b 
? 'a es mayor que b' 
: 'a es menor que b';
console.log(resultado);

//  Usando if/else:

if (a > b) {
  console.log('a es mayor que b');
} else {
  console.log('a es menor que b');
}

// 4.-  Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript? 

let numero = 5;

switch (numero % 2) {
  case 0:
    console.log("El número es par");
    break;
  case 1:
    console.log("El número es impar");
    break;
}






