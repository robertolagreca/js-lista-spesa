//JS-Spesa

//Data una lista della spesa già compilata nel vostro codice, 
//stampare in console gli elementi della lista individualmente, 
//prima con un ciclo for, poi con un ciclo while.
//Quando le stampe in console sono corrette, stampare gli elementi 
//in un elenco puntato in HTML, utilizzando uno dei due cicli 
//scritti al punto precedente.

//array lista della spesa
let arrayListaSpesa = ["uova" , "salsa Teriaki" , "spaghetti" , "hamburger" , "latte" , "tonno" , "cotolette" , "biscotti al cioccolato" , "gelato"];

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

    j++; //variabile contatrice per il ciclo while
}
console.log("---------------------------------------"); 