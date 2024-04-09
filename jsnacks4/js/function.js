/**
 * Description La funzione deve restituire la posizione del elemento al suo interno tramite la stampa del indice
 * Se l'elemento non è presente la funzione stampa = -1
 * @param {object} array 
 * @param {string} elem
 * @param {number} number
 * @returns {number} number
 */
function trovaIndice(array, elemArray, indexElem) {
    // tramite ciclo for controllo se il parametro è elemArray
    // è presente all'interno dell'array
    for(let i = 0; i < array.length; i++) {
        if(elemArray === array[i]){
            // valore che mi deve restituire la funzione è l'indice
            return i;
        } 
        
    }
    // se index elem è diverso da -1 restituisci il numero di indice
    // dell elemento corrispondente
    // altrimenti mi restituisci il valore di default che ho depositato
    // nella variabile indexElem nello script
    if(indexElem !== -1) {
        return indexElem;
    } else {
      return indexElem;  
    }
    
}







