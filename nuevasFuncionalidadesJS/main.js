/*El Spread operator se usa para crear un nuevo objeto apartir de un objeto con un espacio de memoria distinto al primero, esto se hace cuando hacemos una asignacione de un valor de una variable que se usa en varios lugares del codigo*/
const a = { b: 1 };
const c = a;
const d = { ...a };
console.log("a:", a, "c: ", c, "d: ", d);
c.c = 3;
d.c = 5;
console.log("a:", a, "c: ", c, "d: ", d);

/*Una promesa es un valor quie se va a resolver en un futuro, mientras que se pueden ir haciendo otras cosas. 
Tenemos promesas sincronas y asincronas. las sincronas usan Promise.resolve y Promise.reject. Cuando escribimos 'Promise.resolve' nos retornara un valor, que si queremos encadenar a otra promesa, accedemos a un '.then' que podremos utilizar para procesar el resultado obtenido, al cual se le puede encadenar tantos '.then' como querramos.
Con '.catch' capturamos los errores y con un '.reject' hacemos que se salte las operaciones y salte al catch y en caso que no lo capture la aplicacion saltara con un error*/
Promise.resolve(2)
  .then((val) => val * 2)
  .then((val) => console.log(val - 1));

Promise.reject(2)
  .then((val) => val * 2)
  .then((val) => console.log(val - 1))
  .catch((e) => console.log(e));

/*Podemos interrumpir una cadena de promesas si es lo que deseamos*/
Promise.resolve(2)
  .then((val) => val * 2)
  .then((val) => Promise.reject(val));

/*En las promesas asincronas la sintaxis inicial es 'new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);' */
new Promise((resolve, reject) => {
  setTimeout(
    () => resolve(2),
    1000
  ); /*tras el lapso indicado en el segundo argumento, se ejecuta un resolve o un reject segun se indique en el primer argumento de la promesa*/
}).then((x) => console.log(x).catch((e) => console.log(e)));
