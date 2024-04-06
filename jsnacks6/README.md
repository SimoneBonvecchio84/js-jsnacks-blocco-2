#RIMUOVI DALLA CODA 

Scrivere una funzione che, dato un array A in input, restituisca un nuovo array B con tutti gli elementi tranne l'ultimo

ceriamo array a con N elementi

creiamo array b che inizialmente sarà vuoto 

Nella funzione avente due parametri ovvero arrayA e arrayB
arrayB sarà = [] ovvero un array vuoto

nel ciclo for seguente inposteremo la lunghezza di arrayA.length - 1; 
dopo di che utilizzeremo il metodo push, ovvero:
arrayB.push sarà uguale ad arrayA[i] che avrà un elemento in meno visto che
la i < a arrayA.length -1

nel return della funzione inseriremo arrayB.