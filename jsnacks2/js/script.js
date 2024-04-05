// stampare due parole
// verificare tramite una funzione se le parole hanno la stessa lunghezza
// se hanno la stessa lunghezza stampare entrambe
// altrimenti solo la più lunga


let word1 = prompt("stampa prima parola");

let word2 = prompt("stampa seconda parola");

const paroleStamapate = stringaLength(word1,word2);

const paroleUguali = sameLength(word1,word2);

console.log(paroleStamapate);

// verificare lunghezza parole

// una volta verificata la lunghezza di ogni singola parola stabiliamo delle condizioni

// se le due parole hanno una lunghezza uguale vanno stampate entrambe

// altrimenti stamapa la più lunga
