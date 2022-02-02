const todos =
  JSON.parse(localStorage.getItem("todos")) ||
  []; /*con el JSON parse convertimos los elementos almacenados en el localStorage al que podemos agregar y acceder a objetos almacenados localmente en el navegador mediante los metodos set y get. Con la doble barra vertical (||) podemos asignar un valor por defecto en caso que no encuentre nada en el local*/

const actualizarTodos = (todos) => {
  const todoString =
    JSON.stringify(
      todos
    ); /*con el JSON stringify hacemos que los objetos pasen a ser un string para que pueda ser almacenado el valor asignado en el local*/
  localStorage.setItem("todos", todoString);
};

const render = () => {
  const todoList = document.getElementById("todo-list");
  const todosTemplate = todos.map((t) => `<li>${t}</li>`);
  todoList.innerHTML = todosTemplate.join("") /*con el join concatenamos los valosres de un array*/;
  const elementos =
    document.querySelectorAll(
      "#todo-list li"
    ); /*con el querySelector all podemos tomar todos los valores del documento, con el numeral indicamos que buscamos un id, y despues podemos buscar elemoentos u otro id que se contenga dentro del elemento anterior*/
  elementos.forEach((elemento, i) => {
    elemento.addEventListener("click", () => {
      elemento.parentNode.removeChild(
        elemento
      ); /*aca eliminamos el elemento del array de elementos de la lista*/
      todos.splice(
        i,
        1
      ); /*el primer argumento es el indice, y el segundo la cantidad de pocisiones que van a alterarse por lo que eliminamos el elemento del arreglo donde se almacenan los items, pero no actualizamos los indices*/
      actualizarTodos(todos);
      render(); /*con este render hacemos que los arrays de elementos esten sincronizados. Esto es donominada recursividad, y es cuando un metodo se llama asi mismo dentro de si mismo*/
    });
  });
};

window.onload = () => {
  render();
  const form = document.getElementById("todo-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    actualizarTodos(todos);
    render();
  };
};
const arr = [1, 2, 3, 4];
console.log(arr);
arr.splice(0, 1);
