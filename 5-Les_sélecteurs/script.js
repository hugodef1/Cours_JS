//TP13 TP14
/* Toutes les variables */
let myInput = document.querySelector("input")
let btn = document.querySelector(".btn")
let liste = document.querySelector("ul")
let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR')
let li = document.querySelector("#listeCourses li");
let h2 = document.querySelector("h2")
let ul = document.querySelector("ul")

/* Tous les évènements */
li.addEventListener('click', ()=>{
    //li.style.backgroundColor = "lightblue";
    //li.style.textDecoration = "line-through";
    li.classList.toggle("itemCheck")
})
h2.innerText += " : " + dateJourFr
btn.addEventListener('click', ()=>{
    addProduct()
})
myInput.addEventListener("keydown", function(event){
    if (event.key==="enter"){
        addProduct()
    }
})

/* Les fonctions */
function addProduct(){
    if (myInput.value == ""){
        alert("Veuillez saisir un produit !")
    }else{
        let newLi = document.createElement("li");
        newLi.innerText = myInput.value
        ul.appendChild(newLi);
        newLi.addEventListener('click', ()=>{
            newLi.classList.toggle('itemCheck')
        })
    }
}