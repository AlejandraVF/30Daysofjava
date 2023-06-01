/*let dia = prompt("Ingrese un dia de la semana");

let diaMinuscula = dia.toLocaleLowerCase();
let diaSinEspacio = diaMinuscula.trim();

switch (diaSinEspacio) {
    case 'lunes':
        console.log("Dia #1 de la semana");
        console.warn(`${a}`)
        
        break;

    case 'martes':

        console.log("Dia #2 de la semana");
        console.warn(`${a}`)
        
        break;
    
    case 'miercoles':

        console.log("Dia #3 de la semana");
        console.warn(`${a}`)
        
        break;
    
    case 'jueves':

        console.log("Dia #4 de la semana");
        console.warn(`${a}`)
        
        break;

    case 'viernes':

        console.log("Dia #5 de la semana");
        console.warn(`${a}`)
        
        break;

    case 'sabado':

        console.log("Dia #6 de la semana");
        console.warn(`${a}`)
        
        break;

    case 'domingo':

        console.log("Dia #7 de la semana");
        console.warn(`${a}`)
        
        break;      
    
    default:
        break;
}


let num = prompt("Ingrese un numero");

switch (true) {
    case num > 0:
      console.log("El número es positivo");
      break;
    case num == 0:
      console.log("El número es cero");
      break;
    case num < 0:
      console.log("El número es negativo");
      break;
    default:
      console.log("El valor ingresado no era un número");
      
  }
*/
  function obtenerDiaDelMes(year,month) {
    return new Date(year, month, 0).getDate();
  }

  let mes = prompt("Introduce un mes: ");

  switch (mes.toUpperCase()) {
    case "ENERO":
        console.log(`${mes} tiene ${obtenerDiaDelMes(2023,1)} dias.`)
        break;
    case "FEBRERO":
        console.log(`${mes} tiene ${obtenerDiaDelMes(2023,2)} dias.`)
        break;
    case "MARZO":
        console.log(`${mes} tiene ${obtenerDiaDelMes(2023,3)} dias.`)
        break;
      
    default:
        break;
  }