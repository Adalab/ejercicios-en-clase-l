'use strict';

const promos = [
  {
    letter: 'A',
    name: {
      nombre: 'Ada',
      year: 2017
    },
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    letter: 'B',
    name: {
      nombre: 'Borg',
      year: 2017
    },
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    letter: 'C',
    name: {
      nombre: 'Clarke',
      year: 2018
    },
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const result = document.querySelector('.js-result');

function classicFor() {
  let htmlCode = '<ul>';
  for (let index = 0; index < promos.length; index++) {
    //const element = promos[index]; // promos[2]
    // console.log(promos[index].name.nombre);
    htmlCode += `<li>#${index}: ${promos[index].name.nombre}</li>`;
    console.log(htmlCode);
  }
  htmlCode += `</ul>`;
  result.innerHTML = htmlCode;
}

function classicForDec() {
  let htmlCode = '<ul>';
  for (let index = promos.length - 1; index >= 0; index--) {
    htmlCode += `<li>#${index}: ${promos[index].name.nombre}</li>`;
  }
  htmlCode += `</ul>`;
  result.innerHTML = htmlCode;
}

function classicForUntilSecond() {
  let htmlCode = '<ul>';
  for (let index = 0; index < 2; index++) {
    htmlCode += `<li>#${index}: ${promos[index].name.nombre}</li>`;
  }
  htmlCode += `</ul>`;
  result.innerHTML = htmlCode;
}

function classicForEven() {
  let htmlCode = '<ul>';
  for (let index = 0; index < promos.length; index += 2) {
    htmlCode += `<li>#${index}: ${promos[index].name.nombre}</li>`;
  }
  htmlCode += `</ul>`;
  result.innerHTML = htmlCode;
}

function forOf() {
  let htmlCode = '<ul>';
  for (const promo of promos) {
    // const promo = promos[index]
    console.log(promo.name.nombre);
    htmlCode += `<li>${promo.name.nombre}</li>`;
  }
  htmlCode += `</ul>`;
  result.innerHTML = htmlCode;
}

function forNested() {
  let htmlCode = '<ul><!-- ul externo -->';
  for (const promo of promos) {
    htmlCode += `<li>`;
    htmlCode += `<p>Nombre: ${promo.name.nombre}</p>`;
    // students
    console.log('------------');
    htmlCode += `<ul><!-- ul interno -->`;
    for (const student of promo.students) {
      htmlCode += `<li>${student.name}</li>`;
    }
    htmlCode += `</ul>`;
    htmlCode += `</li>`;
    console.log(htmlCode);
  }
  htmlCode += `</ul>`;
  result.innerHTML = htmlCode;
}

forNested();
