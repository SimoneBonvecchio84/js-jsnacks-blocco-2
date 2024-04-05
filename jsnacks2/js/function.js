// creare una funzione che verifica la lunghezza di due stringhe

/**
 * Description
 * @param {string} string1
 * @param {string} string2
 * @returns {string} stringa
 */
function stringaLength (string1, string2) {
    let string1 = "";
    let string2 = "";

    if(string1.length === string2.length) {
        return string1, string2;
    } else if (string1.length < string2.length) {
        return string1;
    } else {
        return string2;
    }
}