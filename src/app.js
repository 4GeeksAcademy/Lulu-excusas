/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["That cat", "Two turtles", "A dragon", "The neighbor"];
const action = ["burned", "ate", "scratched", "stole"];
const what = ["the bed", "my project", "the homework", "the food"];
const when = ["this morning", "last night", "before sunrise", "yesterday"];

function generateExcuse(a, b, c, d) {
  //elegir aleatoriamente 1 elemento de cada array
  let randomWho = a[Math.floor(Math.random() * 4)];
  let randomAction = b[Math.floor(Math.random() * 4)];
  let randomWhat = c[Math.floor(Math.random() * 4)];
  let randomWhen = d[Math.floor(Math.random() * 4)];

  //concatenarlos- unirlos en el mismo orden puesto
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}, sorry...`;

  //mostrar el resultado
}
//
let randomExcuse = generateExcuse(who, action, what, when);
let selectorhtml = document.getElementById("excusa");
selectorhtml.textContent = randomExcuse;

document.getElementById("botonExcusa").addEventListener("click", () => {
  location.reload();
});
