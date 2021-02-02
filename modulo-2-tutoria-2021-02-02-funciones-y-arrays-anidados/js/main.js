// ejercicio 1 de https://github.com/Adalab/ejercicios-extra/tree/master/js-arrays-and-objects
// grabación 2 de https://us02web.zoom.us/rec/play/3LBn1GhQPx32I9gL5iO9erDwSM5H_1sFH6-TZ0TfIj62DjcIwQJobURCoZ7D9mi-9Tu2hxIm3r1av4Oc.CekWdghE_CVauOXJ?autoplay=true&continueMode=true&startTime=1612269707000

'use strict';

const promos = [
  {
    letter: 'A',
    name: 'Ada',
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
    name: 'Borg',
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
    name: 'Clarke',
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

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// TÚ CÓDIGO AQUÍ

const resultElement = document.querySelector('.js-result');

// function paintPromos() {
//   let htmlCode = '';
//   htmlCode += '<ul>';
//   for (const promo of promos) {
//     console.log(promo.students);
//     htmlCode += '<li>';
//     htmlCode += `<p>Nombre: ${promo.name}</p>`;
//     htmlCode += '<ul>';
//     for (const student of promo.students) {
//       console.log(student);
//       htmlCode += `<li>${student.name}</li>`;
//     }
//     htmlCode += '</ul>';
//     htmlCode += '</li>';
//   }
//   htmlCode += '</ul>';
//   resultElement.innerHTML = htmlCode;
// }

// paintPromos();

function paintPromos() {
  let htmlCode = '';
  htmlCode += '<ul>';
  for (let promoIndex = 0; promoIndex < promos.length; promoIndex++) {
    console.log(promos[promoIndex].students);
    htmlCode += '<li>';
    htmlCode += `<p>Nombre: ${promos[promoIndex].name}</p>`;
    htmlCode += '<ul>';
    for (let studentIndex = 0; studentIndex < promos[promoIndex].students.length; studentIndex++) {
      console.log(promos[promoIndex].students[studentIndex].name);
      htmlCode += `<li>${promos[promoIndex].students[studentIndex].name}</li>`;
    }
    htmlCode += '</ul>';
    htmlCode += '</li>';
  }
  htmlCode += '</ul>';
  resultElement.innerHTML = htmlCode;
}

paintPromos();
