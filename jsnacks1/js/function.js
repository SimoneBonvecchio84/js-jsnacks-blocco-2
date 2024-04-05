// genera array




/************************************** */


/**
 * Description Genera un array composto da 10 numeri random 
 * @returns {any}
 */
function generaArray() {
    let nArray = [];
    for (let i = 0; i < 10; i++) {
        let numberInArray = generaNbr(1, 100);
        nArray.push(numberInArray);
    }

}



function generaNbr(min, max) {
    let numRandom = Math.floor(Math.random() * max - min + 1) + min;
    return numRandom
}
