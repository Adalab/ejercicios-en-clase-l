"use strict";

const mainElement = document.querySelector(".js-main");

/* Functions to render results */

const renderArray = (table) => {
  if (table.length === 0) {
    return `<p class="orange">Array vacío</p>`;
  }

  let htmlHead = "";
  let htmlBody = "";

  if (table.length > 0 && typeof table[0] === "object") {
    console.log(typeof adalaberData[0]);
    let htmlRow = "";
    for (const propertyName in table[0]) {
      htmlRow += `<th>${propertyName}</th>`;
    }
    htmlHead = `<thead>
        <tr>
          <th></th>
          ${htmlRow}
        </tr>
      </thead>`;
  }

  for (let i = 0; i < table.length; i++) {
    const item = table[i];

    let htmlRow = "";
    if (typeof item === "object") {
      for (const propertyName in item) {
        htmlRow += `<td>${item[propertyName]}</td>`;
      }
    } else {
      htmlRow = `<td>${item}</td>`;
    }

    htmlBody += `<tr>
        <td>${i}:</td>
        ${htmlRow}
      </tr>`;
  }

  const html = `<table class="table">
      ${htmlHead}
      <tbody>
        ${htmlBody}
      </tbody>
    </table>`;

  return html;
};

const renderObject = (value) => {
  const json = JSON.stringify(value)
    .replace("{", "{\n  ")
    .replaceAll(",", ",\n  ")
    .replace("}", "\n}")
    .trim();

  const html =
    `<pre>${json}</pre>`;
  
  return html;
}

const renderSimple = (value) => `<p>${value}</p>`;

const renderResult = (funcTitle, input, output) => {
  let htmlInput = '';
  if (Array.isArray(input)) {
    htmlInput = renderArray(input);
  }
  else if (input === undefined) {
    htmlInput = `<p class="orange">undefined</p>`;
  }
  else if (input === null) {
    htmlInput = `<p class="orange">null</p>`;
  }
  else if (typeof (input) === 'object') {
    htmlInput = renderObject(input);
  }
  else {
    htmlInput = renderSimple(input);
  }
  
  let htmlOutput = "";
  if (Array.isArray(output)) {
    htmlOutput = renderArray(output);
  }
  else if (output === undefined) {
    htmlOutput = `<p class="orange">undefined</p>`;
  }
  else if (output === null) {
    htmlOutput = `<p class="orange">null</p>`;
  }
  else if (typeof output === "object") {
    htmlOutput = renderObject(output);
  }
  else {
    htmlOutput = renderSimple(output);
  }

  mainElement.innerHTML += `<section class="result">
    <h3 class="result__title">
      ${funcTitle}
    </h3>
    <div class="result__data">
      <div class="result__data--input">
        ${htmlInput}
      </div>
      <div class="result__data--transition">⇨</div>
      <div class="result__data--output">
        ${htmlOutput}
      </div>
    </div>
  </section>`;
};
