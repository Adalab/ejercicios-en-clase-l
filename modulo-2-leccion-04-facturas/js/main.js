"use strict";

/*
  **Ejercicio facturas**
 
  Tenemos un HTML con una tabla de varias filas donde cada fila
representa un gasto. Por cada gasto, tenemos o se muestra información
del nombre del artículo comprado, su precio antes de impuestos, el
importe del IVA a sumar y el importe total. También se especifican
entre paréntesis los artículos que son comida (que tienen un IVA 
reducido) y los que son medicamentos (que tienen un IVA súper-reducido)
  Las columnas de IVA y total no están calculadas.

  Se pide hacer un programa en JS que, por cada fila o artículo,
calcule el importe de su impuesto (multiplicando por 1.21, 1.10 ó 1.04 dependiendo si es un artículo normal, es comida o es un medicamento), 
escriba el importe del impuesto en la columna correspondiente y calcule
y escriba el importe total (importe+impuesto) en el la última columna.

  Gracias!
*/


// Input data
//  - Amount
//  - VAT type

// Output data:
//  - Amount VAT
//  - Total

function getAmount(rowId) {
  const amountCell = document.querySelector(`.js-row-${rowId} .price`);
  const amountValue = parseFloat(amountCell.innerHTML);

  return amountValue;
}

function getConcept(rowId) {
  const conceptCell = document.querySelector(`.js-row-${rowId} .concept`);
  const conceptValue = conceptCell.innerHTML;

  return conceptValue;
}

function thinkVatPercentage(concept) {
  // (comida) -> 1.10
  // (medicamento) -> 1.04
  // ELSE  -> 1.21

  if (concept.includes("(comida)")) {
    return 0.1;
  } else if (concept.includes("(medicamento)")) {
    return 0.04;
  } else {
    return 0.21;
  }
}

function calcVat(amount, vat) {
  return amount * vat;
}

function renderVat(rowId, vatAmount) {
  const vatCell = document.querySelector(`.js-row-${rowId} .vat`);
  vatCell.innerHTML = Math.round(vatAmount * 100) / 100;
}

function renderTotal(rowId, total) {
  const totalCell = document.querySelector(`.js-row-${rowId} .total`);
  totalCell.innerHTML = Math.round(total * 100) / 100;
}

function processRow(rowNumber) {
  // Steps for calc VAT
  //  - Get data: amount, concept
  //  - Think VAT percentage
  //  - Calc VAT amount
  //  - Render VAT amount

  const amount = getAmount(rowNumber);
  const concept = getConcept(rowNumber);
  const vatPerc = thinkVatPercentage(concept);
  const vatAmount = calcVat(amount, vatPerc);
  renderVat(rowNumber, vatAmount);

  // Step for calc Total
  //  - Get data: amount, VAT amount
  //  - Sum values
  //  - Render total

  // I already have the amount!
  // I already have the vatAmount!

  const total = amount + vatAmount;
  renderTotal(rowNumber, total);
}


// Main code

processRow(0);
processRow(1);
processRow(2);
processRow(3);
processRow(4);
