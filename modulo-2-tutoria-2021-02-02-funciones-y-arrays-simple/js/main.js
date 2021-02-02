// ejercicio 4 de https://github.com/Adalab/ejercicios-extra/tree/master/js-arrays-and-objects
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

function paintPromos() {
  let htmlCode = '';
  htmlCode += '<ul>';
  for (const promo of promos) {
    // htmlCode += '<li>';
    // htmlCode += promo.name;
    // htmlCode += '</li>';
    htmlCode += getPromoLi(promo.name);
  }
  htmlCode += '</ul>';
  resultElement.innerHTML = htmlCode;
}

function getPromoLi(name, letter = '') {
  let htmlCode = '';
  htmlCode += '<li>';
  htmlCode += name;
  htmlCode += ': ';
  htmlCode += letter;
  htmlCode += '</li>';
  return htmlCode;
}

paintPromos();

// function getPromoLi(promo) {
//   let htmlCode = '';
//   htmlCode += '<li>';
//   htmlCode += promo.name;
//   htmlCode += '</li>';
//   return htmlCode;
// }

// const getPromoLi = function (promo) {
//   let htmlCode = '';
//   htmlCode += '<li>';
//   htmlCode += promo.name;
//   htmlCode += '</li>';
//   return htmlCode;
// };

// const getPromoLi = promo => {
//   let htmlCode = '';
//   htmlCode += '<li>';
//   htmlCode += promo.name;
//   htmlCode += '</li>';
//   return htmlCode;
// };
