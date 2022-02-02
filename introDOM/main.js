const parrafo = document.getElementById("text");
console.log(parrafo.innerHTML);
window.onload = () => {
  /*Con este metodo podemos esperar que la pagina carge por completo para ejecutar los scripts*/
  const text = document.getElementById("text");
  text.innerText =
    "texto actualizado"; /*asi podemos ir actualizando el contenido de algun elemento*/
  console.log(text.innerHTML);
  parrafo.innerHTML = "<li>epe le pepe</li><li>apa la papa</li>";
};
