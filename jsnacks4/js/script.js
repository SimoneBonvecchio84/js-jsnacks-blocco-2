const array = ["pippo", "pluto", "paperino"];
const elementoDaTrovare = prompt("inserisci elemento") ;
let indice = -1; // Inizializza l'indice a -1 per indicare che l'elemento non è stato trovato

let risultato = trovaIndice(array, elementoDaTrovare, indice);

// Stampa l'indice dell'elemento trovato, o un messaggio se l'elemento non è stato trovato
if (indice !== -1) {
    console.log("L'elemento è stato trovato all'indice:", indice);
} else {
    console.log("L'elemento non è stato trovato nell'array.");
}


// let result = trovaIndice(myArray, elemArray, indice);

