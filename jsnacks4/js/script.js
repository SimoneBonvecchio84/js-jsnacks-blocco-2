const array = ["pippo", "franco", "ciccio", "ada"];

let elemToCheck = prompt("inserisci un nome")

let indexElem = -1;


// for (let i = 0; i < array.length; i++){
//     if(elemToCheck === array[i]){
//         indexElem = i;
//     } 
// }
//  if (indexElem !== -1) {
//     console.log(indexElem)
//  } else {
//     console.log(indexElem);
//  }

let risultato = trovaIndice(array, elemToCheck, indexElem);

console.log(risultato);


