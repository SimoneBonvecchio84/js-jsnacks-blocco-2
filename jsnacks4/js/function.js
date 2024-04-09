/**
 * Description La funzione deve restituire la posizione del elemento al suo interno tramite la stampa del indice
 * Se l'elemento non è presente la funzione stampa = -1
 * @param {object} array 
 * @param {string} elem
 * @param {number} number
 * @returns {number} number
 */
function trovaIndice(array, elemArray, indexElem) {
    
    for(let i = 0; i < array.length; i++) {
        indexElem = -1;
        if(elemArray === array[i]){
            return i;
        } 
        
    }
    
    if(indexElem !== -1) {
        return indexElem;
    } else {
      return indexElem;  
    }
    
}







