/**
 * Description La funzione deve inserire in prima posizione un 
 * nuovo elememto e a seguire gli elementi di arrayA in arrayB
 * @param {array} arrayA
 * @param {array} arrayB
 * @param {string} elemAr
 * @returns {array} array
 */
function inserisciinTesta(arrayA, arrayB, elemAr) {
    arrayB = [];
    arrayB.push(elemAr)

    for (let i = 0; i < arrayA.length; i++) {
        arrayB.push(arrayA[i])
    }

    return arrayB;
}