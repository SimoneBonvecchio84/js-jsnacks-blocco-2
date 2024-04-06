/**
 * Description La funzione rimuove dalla coda l ultimo elemento dell array.
 * @param {any} arrayA
 * @param {any} arrayB
 * @returns {any} array
 */


function rimuoviDallaCoda(arrayA, arrayB){
   arrayB = [];
   for (let i = 0; i < arrayA.length -1; i++) {
    arrayB.push(arrayA[i]);
   }

   return arrayB
    
}

