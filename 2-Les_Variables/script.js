//TP4
let nomJour = "Jeudi";
let numJour = 11;
let nomMois = "Septembre"
let isHiver = false;
console.log(nomJour + numJour + nomMois + isHiver)
//TP5
let tabJours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
let tabMois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
console.log(tabJours[3]);
console.log(tabMois[7]);
let maDateV1 = {
    "jour" : "Jeudi",
    "mois" : "Septembre"
}
let maDateV2 = {};
maDateV2.jour = "Jeudi";
maDateV2.mois = "Septembre";
console.log(maDateV1.jour + maDateV1.mois);
console.log(maDateV2.jour + maDateV2.mois);
//TP6
let nbr1 = 3;
let nbr2 = 7;
let nbr3 = 8;
let nbr4 = 21;
console.log(nbr1 + nbr2);
console.log(nbr4 - nbr3);
nbr2=nbr1*nbr2;
console.log(nbr2);
console.log(nbr2+1);
console.log(nbr4 / nbr1);
console.log(nbr4 % nbr1);
//TP7
let nomSerie = prompt("Quelle est ta serie preferee ?");
let nomPerso = prompt("Quelle est ton personnage favori ?")
alert("Ma serie preferee est "+nomSerie+" et mon personnage est "+nomPerso);
//test commit emoji