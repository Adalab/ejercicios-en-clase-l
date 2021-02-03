"use strict";

const teamsSection = document.querySelector('.js-teams');

let teams = [];



fetch("http://api.igarrido.es/promo/teams.json")
  .then((response) => response.json())
  .then((teamsJson) => {

    // Guardar los datos (ideal: limpiar también)

    teams = teamsJson;

    // Llamo para que se escriban

    renderList();

  });

  /**
   * Con los datos almacenados como array en la variable global teams
   * genera el HTML para hacer la lista de equipos con su lista de miembros.
   */

function renderList() {
  let html = "";

  // Repito el código tantas veces como equipos haya

  for (let i = 0; i < teams.length; i++) {
    const membersList = teams[i];
    // membersList va a contener un array similar a éste:
    //const membersList = ["Marcjanna Stopinska", "Ana Apezteguía", "Sagrario Mielgo", "Ana Bescós Rubio"];


    // Recorro la lista con los nombres de cada miembro

    let htmlMembers = "";
    for (const memberName of membersList) {
      htmlMembers += `<li class="team__member">${memberName}</li>`;
    }

    // Construyo el html de un equipo

    html += `<article class="team">
        <h3 class="title">Equipo ${i + 1}</h3>
        <ulclass="team__members">${htmlMembers}</ul>
        </article>`;
  }

  // Al finalizar de generar el HTML de todos los equipos
  // los escribo en el HTML

  teamsSection.innerHTML = html;
}