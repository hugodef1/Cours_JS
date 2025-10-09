//TP8
let number = 5;
let text = '5';
let isRainingToday = true;
if (number == text) {
    console.log("C'est égal")
}
if (number === text) {
    
} else{
    console.log("Ce n'est pas égal dans le type")
}
if (isRainingToday){
    console.log("Where is my umbrella ?")
}
//TP9
let age = prompt("T'as quel age ?")
let sadikoi = age<0?"Impossible":age<18?"T'es mineur":age<62?"T'es majeur":"T'es majeur et à la retraite"
console.log (sadikoi)
//TP10
let age2 = prompt("T'as quel age 2 ?")
let sadikoi2 = age2<0?"Impossible":age2<18?"T'es mineur":age2==18?"Il vient d'être majeur":age2==25?"Il a 1/4 de siècle":age2==50?"Il a 1/2 siècle":age2==62?"Il vient d'être à la retraite":age2==100?"Il vient d'être centenaire":"Il est majeur"
console.log (sadikoi2)