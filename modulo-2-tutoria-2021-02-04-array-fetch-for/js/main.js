
const elementUl = document.querySelector(".pokemon-list");
const favUl = document.querySelector(".fav");
const url ="https://pokeapi.co/api/v2/pokemon?&limit=50";
let allPokemons =[];
let favoritePokemon= [];
function getAllPOkemon(){
  fetch(url)
  .then( response =>{ return response.json() })
  .then( data =>{
    allPokemons = data.results;
    console.log(allPokemons)
    renderPokemon();
  })
}
function renderPokemon(){
  let html = "";
  for(let i =0; i< allPokemons.length; i++ ){
    html += '<li class="item">';
    html += allPokemons[i].name;
   // html += "  "+ allPokemons[i].url;
    html += "</li>"
  }
  elementUl.innerHTML = html;
}
function renderFav(){
  let fav = getLocalStorage();
  let html = "";
  for(let i =0; i< fav.length; i++ ){
    html += '<li class="item">';
    html += fav[i];
   // html += "  "+ allPokemons[i].url;
    html += "</li>"
  }
  favUl.innerHTML = html;
}
function getLocalStorage(){
  const favLocal = JSON.parse(localStorage.getItem("favorite"));
  return favLocal;
}
function setLocalStorage(){
  localStorage.setItem("favorite",JSON.stringify(favoritePokemon));
}
const handleItem = (ev) =>{
  console.log(ev.currentTarget);

  const liValue =ev.target.innerHTML;
  favoritePokemon.push(liValue);
  renderFav();
  setLocalStorage();
}
elementUl.addEventListener("click",handleItem);

getAllPOkemon();
renderFav();