/**
 * Description La funzione deve restituire la posizione del elemento al suo interno tramite la stampa del indice
 * Se l'elemento non è presente la funzione stampa = -1
 * @param {object} array 
 * @param {string} elem
 * @param {number} number
 * @returns {number} number
 */
function trovaIndice(array, elemArray, indexElem) {
    // Utilizza un ciclo for per iterare attraverso l'array
    for (let i = 0; i < array.length; i++) {
        // Confronta l'elemento corrente con l'elemento da trovare
        if (array[i] === elemArray) {
            // Se l'elemento è trovato, salva l'indice corrente e interrompi il ciclo
            indexElem = i;
            break;
        }
    }
}






