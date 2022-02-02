////  Operadores matematicos
const suma = 2 + 2;
const resta = 2 - 2;
const multiplicaion = 3 * 3; //producto
const division = 2 / 2;
const modulo = 10 % 3; //resto

console.log(suma, resta, multiplicaion, division, modulo);

let num = 5;
num++; //incrementa el valor de la variable en uno
console.log(`incremento ${num}`);
num--; //decrementa el valor de la variable en uno
console.log(`decremento ${num}`);

////  Operadores de asignacion
num += 5; //incrementa el valor de la variable en 5
console.log(`incremento asignado ${num}`);
num -= 5; //decrementa el valor de la variable en 5
console.log(`decremento asignado ${num}`);
num *= 5; //multiplica el valor de la variable por 5
console.log(`producto asignado ${num}`);
num /= 5; //divide el valor de la variable entre 5
console.log(`division asignada ${num}`);

////  Operadores de Comparacion
// Comparadores de igualdad y desigualdad
const resultado1 = 5 === 6 || 5 === "5"; //Comparamos que el dato sea igual de valor y tipo de valor al otro comparado
const resultado2 = 5 == "5"; //Comparamos que el valor de la variable sea igual al otro, sin importar que tipo de valor sea cada uno
const resultado11 = 5 !== 6 || 5 !== "5"; //Comparamos que el dato sea desigual de valor y tipo de valor al otro comparado
const resultado12 = 5 != "5"; //Comparamos que el valor de la variable sea desigual al otro, sin importar que tipo de valor sea cada uno
console.log(resultado1, resultado2, resultado11, resultado12); //Todas las operaciones logicas devuelven true o false
// Comparaciones de jerarquia de valor
const resultado3 = 5 > 4; //mayor que
const resultado4 = 5 > 5; //mayor que
const resultado5 = 5 < 5; //menor que
const resultado6 = 5 < 6; //menor que
const resultado7 = 5 >= 5; //mayor igual que
const resultado8 = 5 >= 5; //mayor igual que
const resultado9 = 5 <= 5; //menor igual que
const resultado10 = 5 <= 6; //menor igual que
console.log(
  resultado3,
  resultado4,
  resultado5,
  resultado6,
  resultado7,
  resultado8,
  resultado9,
  resultado10
);

////  Operadores logicos: or and y not
//or -> ||
const resultadoOr = false || true; //Toma el primer valor distinto de 0 o false si no lo hay, retorna false
console.log(resultadoOr);
//and -> &&
const resultadoAnd = false && true; //Toma el primer valor de 0 o false si no lo hay, retorna true
console.log(resultadoAnd);
// not -> !
const resultadoNot = !true; //Toma el  valor boleano y retorna el opuesto
console.log(resultadoNot);
