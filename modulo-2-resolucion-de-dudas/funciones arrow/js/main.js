'use strict';
const main =  document.querySelector("main");
const title =  document.querySelector(".text");
const titleOuter = document.querySelector(".text").outerHTML;

/*console.log(title);
console.log(titleValue);
console.log(titleOuter);*/
/* Funcion Clasica*/
/*
function handlerTitle(){
   const p = "<p> Lorem ipsum </p>";
   main.innerHTML += p;
}*/

/* funcon arrow*/
const  handlerTitle = () => {
    const p = "<p> Lorem ipsum </p>";
    main.innerHTML += p;
 }

title.addEventListener('mouseover',handlerTitle)

const age = 10;

if (age >= 18){
    console.log("bienvenido");
}
else{
    console.log("no puedes ingresar");
}

/*TERNARIO*/
const msj = (age>=18) ? "bienvenida": " no puedes";
console.log(`ternario ${msj}`);