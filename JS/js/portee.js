// console.log(document.getElementById("d1"));
// console.log(document.getElementsByClassName("d2"));
// console.log(document.getElementsByTagName("div"));

let d1 = document.querySelector("#d1");
console.log(d1);

let d2 = document.querySelector(".d2");
console.log(d2);

let d = document.querySelector("div");
console.log(d);

let alldiv = document.querySelectorAll("div"); //nav ol li
console.log(alldiv[2]);

let d3 = document.querySelector("#d3");
let d4 = document.querySelector("#d4");
let d5 = document.querySelector("#d5");
let d6 = document.querySelector("#d6");

let x = 22; //varaiable globale

portee(); //appel le function de portee

function portee() {
  console.log("portee");

  let x = 1; //variables locales
  var y = 2; // variables locales dont la portee est la fonction

  if (true) {
    let x = 5; //variable locale dont la portee est le  cloc d'instruction
    var y = 10; // portee sur toutr la fonction le 2 devient 10
    d3.innerHTML = x;
    d4.innerHTML = y;
  }

  d1.textContent += x;
  d2.innerHTML += y;

  portee1();
}

// x et y ne sont pas définis car definis la fonction
// d6.innerHTML = y;
d5.innerHTML += x;

function portee1() {
  console.log("portee1");
  z = 500; // oubi du var ou let !!!!!
  d7.innerHTML += z;
}

d8.innerHTML += z; //pas besoin declare id

function aleatoire() {
  //creation d'un nombre aleatoire : Math.random() --> chiffre entre 0 et 1
  //je multiplie ce nombre par 100 0 --> 99
  //Math.round --> arrondi au sens mathématique
  return Math.round(Math.random() * 100);
}

d9.innerHTML += aleatoire(); //j'appella la fonction qui m'ecrit le nombre retourné dans la dic #d9
