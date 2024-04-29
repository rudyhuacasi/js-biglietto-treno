'use strict';

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

//definisco una variabile con il valore di un prompt che chiede il numero di chilometri
const numeroChilometro = Number(prompt  ('Inserisci il numero di chilometri che hai percorso'))
console. log(numeroChilometro)
//definisco una variabile con il valore di un prompt che chiede l'eta del passagero
const etàPassagero = prompt  ('Inserisci l\'età del passagero')
console. log(etàPassagero)
//definisco una variabile e la moltiplicazione di due variabile
const prezzoBiglietto = 0.21 
const calcoloChilometro= prezzoBiglietto * numeroChilometro
// definisco una condizionale di sconto per minorenni e gli over 65 
if(etàPassagero < 18) {
    const scontoBiglietto1 =  calcoloChilometro * 0.2
    console. log (`il prezzo finale è ${scontoBiglietto1}`)
} 
else if(etàPassagero >= 64) {
    const scontoBiglietto2 =  calcoloChilometro * 0.4
    console. log (`il prezzo finale è ${scontoBiglietto2}`)
}else{
    console. log (`il prezzo finale è ${calcoloChilometro}`)
}