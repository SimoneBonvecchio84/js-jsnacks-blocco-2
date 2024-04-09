// INPUT
// array 
const array = ["pippo", "franco", "ciccio", "ada"];
// elemeto da inserire tramite prompt
let elemToCheck = prompt("inserisci un nome")
// variabile nella quale deposito il valore -1 di default
let indexElem = -1;


// invoco la funzione che deposito all' interno della variabile risultato
let risultato = trovaIndice(array, elemToCheck, indexElem);

console.log(risultato);


