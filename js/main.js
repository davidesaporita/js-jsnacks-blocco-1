/**
 * 
 * JSnack
 * 
 * Snack 1: L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.
 * Snack 2: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
 * Snack 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.
 * 
 * JSnack Bonus (non visto insieme e quindi assolutamente facoltativo)
 * Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e fai la somma di tutti gli elementi che sono in posizione dispari. Prova prima senza funzione e poi con funzione.
 * 
 */

/******************/
/**** JSnack 1 ****/
/******************/
console.log('*** JSnack 1 in corso ***');
var word1 = '';
var word2 = '';
do {
    word1 = prompt('JSnack-1 | Inserisci la prima parola:');
} while (!isNaN(word1));

do {
    word2 = prompt('JSnack-1 | Inserisci la seconda parola:');
} while (!isNaN(word2));

console.log('Parola 1: ' + word1);
console.log('Parola 2: ' + word2);
console.log('Parola più lunga: ' + checkLength(word1, word2));
console.log('*** JSnack 1 completato ***');
console.log('---------------------------------------------------------');

function checkLength(word1, word2) {
    if( word1.length > word2.length ) {
        return word1;
    } else if( word2.length > word1.length ) {
        return word2;
    } 
    return 'nessuna delle due';
}

/******************/
/**** JSnack 2 ****/
/******************/
console.log('*** JSnack 2 in corso ***');
var num;
do {
    num = parseInt(prompt('JSnack-2 | Inserisci un numero:'));
} while (isNaN(num));
console.log('Numero inserito: ' + num);
console.log('Numero restituito: ' + isEven(num));
console.log('*** JSnack 2 completato ***');
console.log('---------------------------------------------------------');

function isEven(num) {
    if (num % 2 == 0) {
        return num;
    }
    return ++num;
}