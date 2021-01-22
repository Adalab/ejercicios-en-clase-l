"use strict";

// Get elements from HTML

const nameElement = document.querySelector(".js-firstname");
const lastnameElement = document.querySelector(".js-lastname");
const spanResultElement = document.querySelector(".js-result");



// Input data:
//  - firstname input.js-firstname (value)
//  - lastname  input.js-lastname  (value)

// Output data:
//  - full name span.js-result  (innerHTML)

// Steps:
//   1. Get firstname

function getFirstname() {
  // Extract name from value

  const name = nameElement.value;

  // Return name
  return name;
}

//   2. Get lastname

function getLastname() {
  
  const lastname = lastnameElement.value;

  return lastname;
}

//   3. Compose fullname

// Input data:
//  Firstname & lastname values
// Output data:
//  Fullname

function composeFullName( fn, ln ) {

  const fullName = fn + ' ' + ln;  // = `${fn} ${ln}`;

  return fullName;
}


//   4. Render fullname

// Input data
//  - String: Fullname
//  - Element: span

// Output data: NO

function renderFullName( name ) {
  

  spanResultElement.innerHTML = name;
}






const firstname = getFirstname();
const lastname = getLastname();
const fullName = composeFullName(firstname, lastname);
renderFullName(fullName);
