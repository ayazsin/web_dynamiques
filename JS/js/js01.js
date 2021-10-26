// document.addEventListener("DOMContentLoaded", function () {
//   let bonjour = document.getElementById("d1");
//   console.log(bonjour);
// });
//commentaire
//*
//?
//!
//todo:

nb = 5;
var nb = 1;
let nb1 = 2;

//!javascript sensible a la casse

let nB2;
let nb2;

//?Type de Variables

let str = "bonjour";
console.log(typeof str);
str = 1;
console.log(typeof str);

let notaNumber = "1";
console.log(typeof notaNumber);

let aNumber = parseInt(notaNumber);
console.log(typeof aNumber);

let x = "1bonjour";
console.log(parseInt(x));

let bool = true;
console.log(typeof bool);

// null --> absence de valeur
// undefined --> variable non definie

//symbol
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("foo");

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol2 === 42);
// expected output: false

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol("foo") === Symbol("foo"));
// expected output: false

//bigInt

// donees de type objet
// table
tab = [1, "deli", 3, 4];
console.log(tab);
console.log(typeof tab);

// objet litteral
let obj = {};
obj.marque = "aston martin";
obj.modele = "db9";
obj.couleur = "vert";
obj.nbRoues = 4;
console.log(obj);
console.log(typeof obj);

const pi = 3.14;

//? Operateurs arithmétiques

//! +
//! -
//! *
//! /
//! %

console.log(1 + 2);
console.log(1 + "bonjour"); //concetenation
console.log(5 % 2);

//? Operateurs de Comparaison

//! ==  -->comparaison de valeur
//! === -->compare la valeur et le type
//! !=  -->compare la différence
//! !== -->difference stricte
//! <
//! >
//! <=
//! >=

//? Operateurs d'affectation

let a = 10;
let b = "10";
console.log(a == b); //true
console.log(a === b); //false
console.log(a != b); //false
console.log(a !== b); //true

let c = 10;
let d = 11;

//! if(c=d){}else{} ne marche pas
//* if(c==d){}else{} fonctionne

//? Operateurs d'intrémentation

/*
x++ equivalent a x=x+1 //type numérique
x+= // type string;
*/

let html = "<div>";
html += "montexte";
html += "</div>";
console.log(html);

c = 12;
console.log(c++); //12
console.log(c); //13
console.log(++c); //14

//? Les Operateurs Logiques

/*
&& : ET logique
|| : OU logique
!  : NON logique
*/

let y = 3.525;
console.log(typeof y);
console.log(1 + y);
console.log(isNaN(1 + y)); //false //isNan -->is Not a Number si pas un nombre retourne la valeur true si nombre return false
let z = "10";
console.log(isNaN(1 + z)); //110
console.log(1 + z);

//! eval(); a ne jamais utiliser!!

//? Structure de Controle  --> permet de controler l'execution du code

//*if(cond){je fais ceci} else{je fais cela}

let e = 10;
let f = 11;

if (f > e) {
  console.log("f > e");
} else {
  console.log("f < e");
}

//? Condition Ternaire
let condition = f > e;
console.log(condition);
console.log(condition ? "ok" : "pas ok");

//? Aiguillage
expr = "toto";
switch (expr) {
  case "toto":
    console.log("toto");
    break;
  case "titi":
    console.log("titi");
    break;
  default:
    console.log("desole cela ne correspond a aucune valeur");
}

//? Boucles
//While
//Do..while
//?For
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i == 2) break;
}

console.log("---------");
for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}

//? For of --> utilisée pour parcourir des objets iterables
//boucle utiliée pour parcourir une collection d'élément sélectionnalbes 1 par 1 et dont on connait la position

console.log("---------");
tab2 = ["ayse", "fatih", "betul", "orhan", 5]; //1ier element = 0
console.log(tab2[2]);

for (elt of tab2) {
  console.log(elt);
}

console.log("---------");
let machaine = "bonjour tout le monde"; // machaine est également un objet iterable
//for in --> boucler utilisée pour parcourir les objets literaux.

let personne = {
  prenom: "fab",
  nom: "co",
  age: 22,
  hobby: ["hockey", "paintball"],
};
for (elt in personne) {
  console.log(personne[elt]);
}

//? For each

console.log("---------");
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element)); //a,b,c

// Objets natifs
