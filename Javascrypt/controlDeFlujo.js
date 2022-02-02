////  Control de flujo: permite evaluar iteraciones y el flujo
// If: evalua una condicion para ejecutar cierto codigo
if (true) {
  console.log("Estoy dentro de un if con condicion true");
}
if (!true) {
  console.log("Estoy dentro de un if con condicion false");
}
const edad = 24;
if (edad < 21 && edad > 5) {
  console.log("El ninio puede jugar");
} else {
  console.log("El ninio no puede jugar");
} /*El else no es obligatorio para cada if*/

// While: ciclo infinito hasta que se cumpla cierta condicion
let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

// Switch:Permite ejecutar una instruccion u otra
switch (1) {
  case 1: {
    console.log("Chanchito sad");
    break; /*sin el break, siguee probando si el evaluable conincide con los otros casos*/
  }
  case 2:
    console.log("Chanchito happy");
    break;
  default:
    console.log("No hay chanchitos");
    break;
}

// For:Permite iterar hasta cierta condicion

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //Los arreglos tienen la propiedad lenght que permite saber la cantidad de elementos que posee el arreglo
console.log(num[-2]); //por medio de corchetes accedemos a los indices de un arreglo, que hacen referencia a su pocision dentro del array

for (let i = 0; i <= num.length; i += num[7]) {
  console.log(i, "hola");
}
