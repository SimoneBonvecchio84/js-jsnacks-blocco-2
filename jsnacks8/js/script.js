


let btn = document.getElementById("btn").addEventListener("click", function () {
    
    const arrayA = [ " pippo ", " poppo ", " puppo. "];

    let arrayB = [];


    let elemAr = document.getElementById("input-value").value;

    let result = inserisciinTesta(arrayA, arrayB, elemAr);

    let h2Inner = document.getElementById("innerP");

    h2Inner.innerHTML = `Elemento appena inserito: ${result} `;

    console.log(result);
});





