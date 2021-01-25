"use strict";

// number1 number2
// result
// Give the result of the operation

function sumOriginal(number1, number2) {
  const result = number1 + number2;

  return result;
}

const sumVariable = function (number1, number2) {
  const result = number1 + number2;

  return result;
};

const sumArrows = (number1, number2) => {
  const result = number1 + number2;

  return result;
};

let a = 2;
let b = 5;
const r = sumVariable(2, 5);
console.log(`El resultado es ${r}`)



elemento.addEventListener("click", sumArrows);