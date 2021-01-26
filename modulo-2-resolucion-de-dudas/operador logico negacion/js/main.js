'use strict';

let  valor = false;

const paragraph = document.querySelector(".data");

function handlerParagraph(){
    valor =  true;
    const pValue = paragraph.innerHTML;
    if(valor){
        console.log("se clico en el parrafo");
    }

    if(!(pValue === 'juan')){
        console.log("Bienvenida");
    } 

    console.log(valor);
}
console.log(valor);
paragraph.addEventListener("click",handlerParagraph)