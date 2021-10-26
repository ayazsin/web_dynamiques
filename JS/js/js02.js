// date
let dt = new Date();
console.log(dt); //Tue Oct 26 2021 10:19:39 GMT+0200 (Central European Summer Time)
console.log(dt.toLocaleString()); //26/10/2021, 10:19:39
let dt2 = Date.now();
console.log(dt2); //1635236379801
let annee = dt.getFullYear();
console.log(annee); //2021
let mois = dt.getMonth(); //janvier 0
console.log(mois); //9
let jour = dt.getDay();
console.log(jour); //2
let dim = new Date(2021, 9, 24);
console.log(dim); //Sun Oct 24 2021 00:00:00 GMT+0200 (Central European Summer Time)
console.log(dim.getDay()); //0

//library je sur les dates : globalize.js

// string

let str = new String();
str = "bonjour";

let str2 = "bonjour tout le monde";

// slice(start, end);
console.log(str2.slice(2, 5)); //njo
console.log(str2.slice(-2)); //de //! accepte les valeurs negatives
// substring(start, end);
console.log(str2.substring(2, 5)); //njo
// substr
console.log(str2.substr(2, 5)); //njour
console.log(str2.replace(/o/g, "a")); //banjaur taut le mande
console.log(str2.toUpperCase()); //BONJOUR TOUT LE MONDE
let str3 = str2.toUpperCase();
console.log(str3.toLowerCase());

let str4 = "     bonjour     ";
console.log(str4.trim().length); //7
console.log(str2.charAt(3)); //j

//? Array
// --> tablea peur etre converti en string et vice versa

tab = ["john", "Dee", 23];
console.log(tab.length); //3
let lg = tab.length;
for (i = 0; i < lg; i++) {
  console.log(tab[i]); //john //Dee //23
}
tab.push("adresse");
console.log(tab); //(4) ['john', 'Dee', 23, 'adresse']
tab.unshift("bonjour"); //(5) ['bonjour', 'john', 'Dee', 23, 'adresse']
console.log(tab);
tab.sort();
console.log(tab.sort()); //(5) [23, 'Dee', 'adresse', 'bonjour', 'john']
console.log(tab.indexOf("alpha")); // -1 --> élément n'existe pas

let tab2 = [1, 2, 3, 1, 2, 3];
let tab3 = Array.from(new Set(tab2));
console.log(tab3); //[1, 2, 3]
let tab4 = tab3;
console.log(tab4);
tab3.push(5);
console.log(tab3); //[1, 2, 3, 5]
console.log(tab4); //[1, 2, 3, 5]

//deep cloning
let tab5 = JSON.parse(JSON.stringify(tab3));
tab3.push(6);
console.log(tab3); //  [1, 2, 3, 5, 6]
console.log(tab5); //  [1, 2, 3, 5]

let tab7 = [
  [1, 2, 3],
  [4, 5, 6, 7],
];

for (let i = 0; i < tab7.length; i++) {
  for (let j = 0; j < tab7[i].length; j++) {
    console.log(tab7[i][j]);
  }
}

for (const valeur of tab7) {
  for (const valeur2 of valeur) {
    console.log(valeur2);
  }
}
europrices = [120, 340, 550, 245, 322.5, 789];

//sorting ascending
console.log(europrices.sort((a, b) => a - b));

//sorting descending
console.log(europrices.sort((a, b) => b - a));

console.log(europrices.sort());

function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// expected output: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// expected output: 3140

let nb = "x589";
console.log(isNaN(nb));
let nb1 = 3.12855987654321;
console.log(nb1.toPrecision(5));
console.log(nb1.toFixed(2));

// Objet Math
console.log(Math.ceil(nb1)); //plus petit entier superieur ou egal au nombre
console.log(Math.floor(nb1)); //plus grand entier inférieyr ou egal
console.log(Math.round(nb1)); //nombre arrondi
console.log(Math.PI);
