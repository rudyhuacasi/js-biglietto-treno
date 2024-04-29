'use strict';

//definisco una variabile con il valore di un prompt che chiede pari o dispari pari/dispari
const SceltaUtentePariDispari = prompt  ('Inserisci pari o dispari');
console. log(SceltaUtentePariDispari);
/*
const SceltaUtentePari = 'pari';
console. log(SceltaUtentePari);
const SceltaUtenteDispari = 'dispari'
console. log(SceltaUtenteDispari);
*/
//definisco una variabile con un valore di prompt 1-9 - numerico numero dell'utente (1/9)
const numeroUtente = prompt  ('Inserisci un valore di 1-9')
console. log(numeroUtente)
//definisco una variabile con un valore randomico tra 1 e 9
const numeroComputer = Math.floor(Math.random()*8+1)
console .log(numeroComputer)
//definisco una variabile con la somma di numeroUtente + numeroComputer = totaleNumero
const totaleNumero = parseInt(numeroUtente) + parseInt(numeroComputer);
console. log(totaleNumero);
//definisco una variabile che ci dice se il valore totaleNumero è pari o dispari
 
const risultatoPariDispari = totaleNumero % 2
if(risultatoPariDispari=== 0 && SceltaUtentePariDispari === `pari`){
    console .log(`vince utente`)
}else if(risultatoPariDispari !== 0  && SceltaUtentePariDispari === 'dispari'){
    console .log(`vince computer`)
}