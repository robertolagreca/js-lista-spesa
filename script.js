//JS-Spesa

//Data una lista della spesa già compilata nel vostro codice, 
//stampare in console gli elementi della lista individualmente, 
//prima con un ciclo for, poi con un ciclo while.
//Quando le stampe in console sono corrette, stampare gli elementi 
//in un elenco puntato in HTML, utilizzando uno dei due cicli 
//scritti al punto precedente.

//array lista della spesa
let arrayListaSpesa = ["uova" , "salsa Teriaki" , "spaghetti" , "hamburger" , "latte" , "tonno" , "cotolette" , "biscotti al cioccolato" , "gelato"];

let container = document.querySelector(".list-group");
//let btnCancel = document.getElementById("container-btn-cancel");

//ciclo for
console.log("---------------------------------------");
console.log("Stampa lista spesa attraverso ciclo FOR");

for(let i = 0; i < arrayListaSpesa.length; i++){

    console.log(arrayListaSpesa[i]);

}
console.log("---------------------------------------");

//ciclo while
console.log("Stampa lista spesa attraverso ciclo WHILE");
let j = 0;

while(j < arrayListaSpesa.length){

    console.log(arrayListaSpesa[j]);
    container.innerHTML += '<li class="list-group-item">' + arrayListaSpesa[j] + '</li>';

    //BONUS 2 aggiungere button per eliminare
    //btnCancel.innerHTML = '<div class="row border"> <div class="col-8 col-sm-6 border"> <button type="button" id="btn-cancel" class="btn btn-danger">Eliminare</button></div> </div>';
    
    j++; //variabile contatrice per il ciclo while
}
console.log("---------------------------------------"); 

//BONUS 1. Aggiunta bottone per aggiungere prodotto nella lista ed aggiungerlo nella lista HTML
let checkBtn, checkProduct;

checkBtn = document.getElementById("btn-product"); //aggancio bottone

checkBtn.addEventListener('click', function() { //evento click su bottone

    checkProduct = document.getElementById("product").value;    //prendo valore input scritto

    if(checkProduct == ""){     //controllo se l'input è vuoto
        alert("Valore vuoto. Riprovare");
        console.log("Valore vuoto. Riprovare");
    } else {

    arrayListaSpesa.push(checkProduct); //aggiungo prodotto all'array

    console.log("Lista aggiornata");

    j = 0;

    while(j < arrayListaSpesa.length){   //ristampo lista aggiornanta su console
        
        console.log(arrayListaSpesa[j]);
        
        j++; //variabile contatrice per il ciclo while
    } 

    //aggiungo il prodotto alla lista html
    container.innerHTML += '<li class="list-group-item">' + arrayListaSpesa[arrayListaSpesa.length - 1] + '</li>';
}

});
