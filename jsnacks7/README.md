#RIMUOVI DALLA TESTA

Scivi una funzione rimuoviDallaTesta che dati un arrayA in input, restituisca un arrayB con tutti gli elementi dell arrayA tranne il primo.

creare array A nello script con elementi interni a piacimento.

Creazione ciclo for che ci dovrà permettere di togliere il primo elemento.
Procedimento
inizializzare let i = arrayA.length -1 ; la in in questo caso sarò > di 0 e il contatore sarà i--
Poi applichiamo ad arrayB il .push(array[i]) che popolera arrayB con tutti gli elementi tranne il primo visto che abbiamo fatto partire il ciclon dalla fine

A questo punto però l ordine degli elemeti di arrayB è invertito. Per farli ritornare nel ordine iniziale visto in arrayA creo un altro ciclo for (con andamento cotrario) e un altra variabile che chiamero arrayBinv dove deposito arrayB[j] 

Il return della funzione avrà come elemento appunto arrayBinv.

