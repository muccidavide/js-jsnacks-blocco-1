/* 
SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/
let emptyArray = [];


for(i = 0; i < 6; i++){
    let userNumber = parseInt(prompt('Inserisci un numero'));
    if (userNumber % 2 != 0 ) {
        emptyArray.push(userNumber)
    } else {
        console.log('il numero è pari');
    }
}

console.log(emptyArray);