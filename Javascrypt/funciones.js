////  Funciones
function iterar(arreglo) {
  arreglo.forEach((element) => {
    console.log(element);
  });
}

const arr = ["hola", 2, true, "25", null];
const arr1 = ["pepe", "josele", true, "25", null];
iterar(arr);
iterar(arr1);

function suma(a, b) {
  return a + b;
}
let resultado1 = suma(4, 5);
console.log(`Resultado ${resultado1}`);

////  Callbacks: Hace referencia al ejecutar un metodo "A" pasado por medio de parametros a otro metodo "B"
function restar(a, b, callback) {
  const r = a - b;
  callback(r);
}
function callback(result) {
  console.log(`Resultado ${result}`);
}
restar(
  6,
  5,
  callback
); /*El metodo 'callback' es pasado por parametro sin los parentesis porque de lo contrario, seria ejecutado al momento de pasarlo como parametro*/
/*Los callbacks en JS son posibles ya que las funciones tambien son interpretadas como valores, por lo que pueden ser usados como parametros*/

////  Fat Arrow Functions: No precisa la palabra de function, y si es de una sola linea, no precisa de un return, si se usan llaves, precisa de un return
const producto = (a, b) /*parametros*/ => a * b;
console.log(`producto ${producto(5, 5)}`);
const modulo = (a, b) => {
  return a % b;
};
console.log(`modulo ${modulo(3, 2)}`);

////  Funciones Anonimas: utilizadas comunmente en los callbacks, debido a que solo se van a utilizar una sola vez en toda la aplicacion

restar(2, 3, function (r) {
  console.log("soy una funcion anonima, y mi resultado es ", r);
});
