"use strict";

const countElement = document.querySelector('.js-count');
const listElement = document.querySelector(".js-list");

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

// Paso 1 Mostrar una frase que indique cuántas tareas hay.

countElement.innerHTML = `Tenemos ${tasks.length} tareas`;




/*
// Paso 2 Mostrar sólo una tarea

let html = "";

for (const oneTask of tasks) {
  html += `<li>${oneTask.name}</li>`;
}

listElement.innerHTML = html;
*/

/*
// Paso 3. Tachar las completadas

let html = "";

for (const oneTask of tasks) {
  console.log(oneTask);

  if (oneTask.completed) {
    html += `<li class="crossout">`;
  }
  else {
    html += `<li>`;
  }
  
  html += oneTask.name;
  html += `</li >`;


//  html += `<li ${oneTask.completed ? 'class="crossout"' : ""}>${oneTask.name}</li>`;

}

listElement.innerHTML = html; */

// Paso 4. Marcar tareas como completas o incompletas


/**
 * Con renderList, se recorren las tareas del array tasks y se escriben dentro de 
 * <li> en la página (en el ul.js-list).
 * Al escribir todas, se llama a listenInputs().
 */

const renderList = () => {
  console.log("Escribo las tareas en el HTML");

  let html = "";

  for (let index = 0; index < tasks.length; index++) {
    const oneTask=tasks[index];

    if (oneTask.completed) {
      html += `<li class="crossout">`;
    } else {
      html += `<li>`;
    }

    html += `<input class="js-complete" value="${index}" type="checkbox" ${oneTask.completed ? 'checked="checked"' : ''}/>`;
    html += oneTask.name;
    html += `</li >`;
  }

  listElement.innerHTML = html;

  // Asignar eventos

  listenInputs();
};

/**
 * listenInputs busca todos los input con la clase .js-complete y les asocia
 * al evento click la función handleClick().
 * Cuando se haga click sobre un input.js-complete, el navegador llamará a handleClick()
 */

const listenInputs = () => {
  console.log("Asigno eventos a cada input-checkbox");

  const inputCheckList = document.querySelectorAll(".js-complete");

  for (const oneInput of inputCheckList) {
    oneInput.addEventListener("click", handleClick);
  }
};

/**
 * Es una función que se ejecuta cuando la usuaria haga click en algún input.js-complete
 * Cada input tiene el índice del elemento que le corresponde en su atributo value.
 * Tomaremos el valor de value y lo usaremos para acceder al elemento del array con los datos.
 * En ese elemento, se cambiará el valor de completed por su contrario.
 * 
 * Como se modifica el array de datos, se vuelve a llamar a renderList()
 *   para que se vuelva a pintar la lista de tareas acutalizada
 */

const handleClick = (event) => {
  console.log("Atiendo un click en un checkbox");

  const indexList = parseInt(event.currentTarget.value);

  console.log(`Has hecho click sobre el input asociado al dato de la posición ${indexList}`);

  // Establezco la tarea como no-completada (si completed === true)
  // o la marco como completada (si completed === false --> el else)
  /*   
  if (tasks[indexList].completed) {
    tasks[indexList].completed = false;
  }
  else {
    tasks[indexList].completed = true;
  }
  */
  tasks[indexList].completed = !tasks[indexList].completed;

  // Ahora que he actualizado la lista de datos, vuelvo a escribirlos en el HTML:

  renderList();
};


// Cuando cargue la página, escribo los datos en el HTML:

renderList();