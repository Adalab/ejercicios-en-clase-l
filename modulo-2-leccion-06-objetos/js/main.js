"use strict";

// Variables de tipos primitivos

const var1 = 1;
const var2 = "2";




// Variables de tipos estructurados

// Objeto declarado e inicializado

const miMascota = {
  nombre: "Akane",
  color: "Rubio",
  edad: 12
};

// Objeto vacío y vamos creando e inicializando propiedades

const otraMascota = {};
otraMascota.nombre = "Ria";
otraMascota.color = "Pardo";
otraMascota.edad = 0.9;




// Uso punto . o corchetes para acceder o modificar las propiedades

miMascota.edad = 13;

miMascota["edad"] = 13;

const a = "edad";

miMascota[a] = 13;
otraMascota[a] = 13;




// Nuevas propiedades

miMascota.dueño = "Iván";
otraMascota.dueña = "Cris B.";

const b = "tieneColita";
miMascota[b] = true;
otraMascota[b] = true;




// Funciones
/*
function maullarGenerico() {
  console.log("MIAAAU!");
}

otraMascota.maullar = maullarGenerico;
*/

otraMascota.maullar = (nombre) => {
  console.log(`MIIAAAU ${nombre}!!!`);
};

otraMascota.maullar("Cristina");




// Otro punto de vista:

const diccionario = {};
diccionario.arbol = "tree";
diccionario.chica = "girl";
