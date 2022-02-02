console.log("Hola Mundo!");
////  Tipos de datos en JS
// Cadena o string: valores contenidos entre comillas simples, tambien puede usarse comillas dobles.
// Boolean: es true o false.
// Null: Es un valor con valor nulo. significa vacio.
// Number: Numeros enteros.
// Undefined: No se encuentra dedefinido el valor, por tanto no se conoce su tipo.
// Object: objeto.

////  Definicion de variables
// var: se utiliza al comienzo del archivo. puede llegar a tener comportamientos extranios.
// let
// const: no permite alterar el valor de una varible
let miPrimeraVariable = "Mi primera variable!";
console.log("miPrimeraVariable"); /*si usamos comillas tomara la variable por un string*/
console.log(miPrimeraVariable);

miPrimeraVariable =
  "Valor cambiado"; /*A esto de reasignar el valor de una variable se le denomina muitabilidad*/
console.log(miPrimeraVariable);

let miBolean = true; /*Las variables tienen que ser definido con una letra como primer letra*/
let miOtroBolean = false; /*Las variables tienen que tener un nombre que represente su valor*/

let miNumero = 48; /*esta es la forma de definir una variable con un valor primitivo*/
let miOtroNumero = 84;
console.log(
  miNumero,
  miOtroBolean,
  miOtroNumero,
  miBolean,
  miPrimeraVariable
); /*los numeros y boleanos se muestran diferentes a los strings en la terminal*/
let undef;
console.log(undef); /*Como no se le declaro un valor se muestra undefinido*/
let nul = null;
console.log(nul); /*Se muestrea en negrita en la terminal*/
//*Los valores nulos o indefinidos se muestran como falsos en las condicionales*//

////  Objeto:Agrupacion de datos que hacen sentido entre si
const miPrimerObjeto = {}; /*Es un objeto vacio*/
const miObjeto = {
  nombre: "Josele",
  apellido: "Rodriguez",
  documento: 43298420,
  condicion: true,
}; /*usamos las comas para ir separando las diferentes propiedades del ojetos y posteriormente de definir una propiedad, colocamos ':' para indicar su valor. tras definir y dearle un valor a la ultima propiedad le agregamos una coma a modo de buena practica, por un lado por si se quiere copiar y pegar la ultima linea, y por razones del versionado*/
console.log(miObjeto, miPrimerObjeto);
console.log(
  miObjeto.nombre
); /*Para acceder a la propiedad de un objeto, hay que ponerl el nombre del objeto, seguido por un punto y luego poner la propiedad a la que se desea acceder*/

////  Arreglos y listas
const arrVacio = [];
const arr = [
  1,
  "hola",
  true,
  miObjeto,
  undefined,
  "pajaworld",
  null,
]; /*Los arreglos contienen elementos de cualquier tipo de valor*/
console.log(arrVacio, arr); /*los arreglos se muestran entre corchetes en la consola*/
arr.push(5); /*Metodo para agregar elementos a un arreglo*/
arr.push(miPrimeraVariable); /*Al pushear una variable, pusheamos el valor de la variable*/
console.log(arr);
