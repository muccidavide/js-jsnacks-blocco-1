/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

let arrayNumbers = [];

for ( i = 0; i < 10; i++){
    let NumbersUser = parseInt(prompt('Inserisci un numero'));
     arrayNumbers.push(NumbersUser);
}
 console.log(arrayNumbers);

let somma = 0;
for (i = 0 ; i < arrayNumbers.length; i++){
    somma += arrayNumbers[i]
    
}
console.log(somma);

