/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let divCard = buildCard();
  asignValuesCard(divCard);

  let divCard2 = buildCard();
  asignValuesCard(divCard2);
};

window.myClickFunction = function myClickFunction() {
  let divCard = buildCard();
  asignValuesCard(divCard);
};

function buildCard() {
  //Construye divCard
  let divCard = document.createElement("div");
  divCard.setAttribute("class", "card");
  //Construye spanCardTop
  let spanCardTop = document.createElement("span");
  spanCardTop.setAttribute("class", "card-top");
  //Construye spanCardBody
  let spanCardBody = document.createElement("span");
  spanCardBody.setAttribute("class", "card-body");
  //Construye spanCardBottom
  let spanCardBottom = document.createElement("span");
  spanCardBottom.setAttribute("class", "card-bottom");
  //Añado los 3 span dentro de divCard
  divCard.appendChild(spanCardTop);
  divCard.appendChild(spanCardBody);
  divCard.appendChild(spanCardBottom);
  //Añado la divCard dentro de containerCard
  let containerCard = document.querySelector(".container-fluid");
  containerCard.appendChild(divCard);

  return divCard;
}

function asignValuesCard(divCard) {
  let spanArray = divCard.children;
  let cardBody = document.querySelector(".card-body");
  let valuesCard = randomValue();

  for (let i = 0; i < spanArray.length; i++) {
    spanArray[i].style.color = valuesCard.color;

    if (spanArray[i].className === cardBody.className) {
      spanArray[i].innerHTML = valuesCard.number;
    } else {
      spanArray[i].innerHTML = valuesCard.suite;
    }
  }
}

function randomValue() {
  let arrayNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let arraySuites = ["\u2666", "\u2665", "\u2663", "\u2660"];
  let arrayColor = ["red", "black"];
  let objectValores = {
    number: arrayNumber[randomNumber(arrayNumber.length - 1)],
    suite: arraySuites[randomNumber(arraySuites.length - 1)],
    color: arrayColor[randomNumber(arrayColor.length - 1)]
  };

  return objectValores;
}

function randomNumber(max) {
  var numRandom = Math.floor(Math.random() * (max + 1));

  return numRandom;
}
