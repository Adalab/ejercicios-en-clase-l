"use strict";

// EJERCICIO 1

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};




// EJERCICIO 2: Con console.log() dentro del método

adalaber1.run = () => {
  console.log("Estoy corriendo");
};

adalaber1.runMarathon = (distance) => {
  console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
};

adalaber1.run();

adalaber1.runMarathon(50);




// EJERCICIO 2: Con console.log() fuera del método

adalaber1.run = () => {
  return "Estoy corriendo";
};

adalaber1.runMarathon = (distance) => {
  return `${adalaber1.run()} un maratón de ${distance} kilómetros`;
};

console.log( adalaber1.run() );

console.log( adalaber1.runMarathon(50) );




// TEORÍA: Los objetos son «tipos especiales»

const texto = "Este es mi texto";

const copiaTexto = texto;    // --> Se clona o se duplica el texto

const otraAdalaber = adalaber1;   // --> Son dos nombres de variables para el mismo objeto

otraAdalaber.name = "Dayana";     //  Si cambio el nombre en otraAdalaber, afecta a adalaber1 (porque es el mismo)

const adalaber2 = adalaber1;      // Ahora adalaber1, adalaber2 y otraAdalaber «apuntan» al mismo objeto
adalaber2.name = "Otro";

otraAdalaber.runTriathlon = () => { };  // Añadimos el método runTriathlon() y se puede ejecutar con adalaber1.runTriathlon() o con adalaber2.runTriathlon() o con otraAdalaber.runTriathlon()


// TEORÍA: Si paso un objeto como parámetro y lo modifico dentro de la función, el cambio permanecerá fuera, después de ejecutar la función.

function quePasaConObjeto(adalaber) {
  adalaber.job = "developer";
}

console.log(adalaber1);
quePasaConObjeto(adalaber1);
console.log(adalaber1);




// TEORÍA: Uso del this

adalaber1.presentarme = function() {
  console.log("Hola! Soy la adalaber " + this.name ); // this es otro nombre más para el objeto de adalaber1
};

adalaber1.presentarme();