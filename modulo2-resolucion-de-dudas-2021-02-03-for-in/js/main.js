'use strict';

const promoA = {
  letter: 'A',
  name: 'Ada',
  year: 2017,
  key: 'La clave!!!',
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
};

for (const key in promoA) {
  // promoA.name
  // promoA['name']
  // promoA[key]
  // promoA.key no funciona
  console.log(key, ':', promoA[key]);
}

// for (const elNombreDeLaPropiedad in elObjeto) {}

// for (const elElementoDelArray of elArray) {}
