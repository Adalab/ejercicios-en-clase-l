"use strict";

const listElement = document.querySelector('.js-list');
const editAdalaberForm = document.querySelector(".js-newAdalaber");

const data = [
  {
    id: 0,
    nombre: "Adriana del Teso",
    promo: "Lee",
    github: "2y2son4",
    equipo: "Sexto Sentido",
    nota: 10,
  },
  {
    id: 1,
    nombre: "Amanda García",
    promo: "Lee",
    github: "AmandaKhol",
    equipo: "Nómadas digitales",
    nota: 10,
  },
  {
    id: 2,
    nombre: "Ana Apezteguía",
    promo: "Lee",
    github: "anaapezteguia",
    equipo: "devRockets",
    nota: 10,
  },
  {
    id: 3,
    nombre: "Ana Bescós",
    promo: "Lee",
    github: "anabescos",
    equipo: "devRockets",
    nota: 10,
  },
  {
    id: 4,
    nombre: "Ana Diz",
    promo: "Lee",
    github: "anadiz13",
    equipo: "We can code it!",
    nota: 9,
  },
];


const handClickCard = (ev) => {
  editAdalaberForm.classList.remove("hidden");

  const liClicked = ev.currentTarget;
  const index = parseInt(liClicked.dataset.index);
  const dataAdalaberClicked = data[index];

  console.log(dataAdalaberClicked);

  const nameInput = document.querySelector(".js-newName");
  const githubInput = document.querySelector(".js-newGithub");
  const teamInput = document.querySelector(".js-newTeam");
  
  nameInput.value = dataAdalaberClicked.nombre;
  githubInput.value = dataAdalaberClicked.github;
  teamInput.value = dataAdalaberClicked.equipo;

};






const ulElement = document.createElement("ul");

console.log(ulElement);

ulElement.classList.add("adalabers__list");

/*
// For clásico
for (let i = 0; i < data.length; i++) {
    const liItem = document.createElement("li");
    const liItemContent = document.createTextNode(data[i].nombre);
    liItem.appendChild(liItemContent);

    ulElement.appendChild(liItem);
}
*/

for (const adalaberData of data) {
  // adalaberData = data[ i ]
  // LI

  const liItem = document.createElement("li");
  liItem.classList.add("adalabers__item");

  liItem.dataset.miDato = "Hola"; // Ejemplo, no hace falta
  liItem.dataset["otroDato"] = "Otro hola"; // Ejemplo, no hace falta
  liItem.dataset.index = adalaberData.id;

  liItem.addEventListener("click", handClickCard);

  ulElement.appendChild(liItem);

  // H3

  const adalaberTitle = document.createElement("h3");
  const titleContent = document.createTextNode(adalaberData.nombre);
  adalaberTitle.classList.add("adalabers__item--title");
  adalaberTitle.appendChild(titleContent);
  adalaberTitle.id = adalaberData.nombre;
  adalaberTitle.setAttribute("title", "Nombre de la Adalaber");

  // Ejemplo de cómo se usan los estilos en línea
  // (pero debemos evitar usarlo, mejor usar clases CSS)
  if (adalaberData.nombre === "Ana Diz") {
    adalaberTitle.style.color = "#00FF00";
    adalaberTitle.style.textDecoration = "none";
  }
  liItem.appendChild(adalaberTitle);

  // P (github)

  const adalaberGithub = document.createElement("a");
  const githubContent = document.createTextNode(adalaberData.github);
  adalaberGithub.classList.add("adalabers__item--github");
  adalaberGithub.appendChild(githubContent);
  adalaberGithub.href = "https://github.com/" + adalaberData.github;
  adalaberGithub.setAttribute("target", "_blank");

  liItem.appendChild(adalaberGithub);
}

 

listElement.appendChild(ulElement);





/*
  No se debe de reutilizar el elemento
  Un elemento no puede estar en dos sitios del DOM.
listElement.appendChild(liItem);
*/

// Ejemplo de fetch complejo (cuando pulsamos en el botón save)

const saveButton = document.querySelector(".js-save");

const handleClickSave = () => {
  const nameInput = document.querySelector(".js-newName");
  const githubInput = document.querySelector(".js-newGithub");
  const teamInput = document.querySelector(".js-newTeam");

  fetch("http://api.igarrido.es/promo/lee.json", {
    method: "POST",
    body: {
      nombre: nameInput.value,
      equipo: githubInput.value,
      github: teamInput.value,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        editAdalaberForm.innerHTML += "<p>Guardado</p>";
      }
      else if (response.status >= 400) {
        editAdalaberForm.innerHTML += "<p>Error en la petición o los datos</p>";
      }
    })
    .catch((message) => {
        editAdalaberForm.innerHTML += "<p>Error, servidor caído</p>";
    });
}

saveButton.addEventListener("click", handleClickSave);