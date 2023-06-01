/*LEVEL 3 EJERCICIO 1 

const mes = prompt('Introduce un mes:');

let dias;

switch (mes.toLowerCase()) {
  case 'enero':
    dias = 31;
    break;
  case 'febrero':
    dias = 28;
    break;
  case 'marzo':
    dias = 31;
    break;
  case 'abril':
    dias = 30;
    break;
  case 'mayo':
    dias = 31;
    break;
  case 'junio':
    dias = 30;
    break;
  case 'julio':
    dias = 31;
    break;
  case 'agosto':
    dias = 31;
    break;
  case 'septiembre':
    dias = 30;
    break;
  case 'octubre':
    dias = 31;
    break;
  case 'noviembre':
    dias = 30;
    break;
  case 'diciembre':
    dias = 31;
    break;
  default:
    dias = 'desconocido';
}

alert(`${mes} tiene ${dias} días.`);


const month = prompt('Introduce un mes:');

const daysInMonth = {
  enero: 31,
  febrero: 28,
  marzo: 31,
  abril: 30,
  mayo: 31,
  junio: 30,
  julio: 31,
  agosto: 31,
  septiembre: 30,
  octubre: 31,
  noviembre: 30,
  diciembre: 31
};

const monthLowerCase = month.toLowerCase();

const days = daysInMonth[monthLowerCase];

if (days) {
  alert(`${month} tiene ${days} días.`);
} else {
  alert('Mes inválido.');
}
*/

const mes = prompt('Introduce un mes:');

let dias;

switch (mes.toLowerCase()) {
  case 'enero':
  case 'marzo':
  case 'mayo':
  case 'julio':
  case 'agosto':
  case 'octubre':
  case 'diciembre':
    dias = 31;
    break;
  case 'febrero':
    dias = 28;
    break;
  case 'abril':
  case 'junio':
  case 'septiembre':
  case 'noviembre':
    dias = 30;
    break;
  default:
    alert('Mes inválido');
    break;
}

if (dias) {
  alert(`${mes} tiene ${dias} días.`);
}
