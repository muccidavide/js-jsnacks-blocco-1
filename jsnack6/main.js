// Stampa il cubo dei primi N numeri doce N è un numero indicaro dall'utente

const userNumber = parseInt(prompt("Inserisci un numero"))
let powCubeArray= []
let sum = 1;

for( i = 0; i < userNumber; i++){
    powCubeArray.push(Math.pow(sum++,3))
}
console.log(userNumber);
console.log(powCubeArray);
