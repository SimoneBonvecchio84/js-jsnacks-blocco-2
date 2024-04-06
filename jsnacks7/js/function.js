/**
 * Description
 * @param {any} arrayA
 * @param {any} arrayB
 * @returns {any} arrayB
 */
function rimuoviDallaTesta(arrayA, arrayB, arrayBinv) {
    arrayB = [];
    arrayBinv = [];
    for(let i = arrayA.length -1; i > 0; i--){
       
        arrayB.push(arrayA[i]);
    }
    
    for(let j = arrayB.length -1; j >= 0; j--) {
       arrayBinv.push(arrayB[j]);  
    }
    

   
    

    return arrayBinv;
}