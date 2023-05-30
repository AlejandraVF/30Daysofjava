//1
const date = new Date();
const formattedDate = date.toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
console.log(formattedDate);
