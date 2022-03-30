// Chiedi un numero di 4 cifre all'utente w calcola la somma di tutte le cifre che compongono il numero


const userNumber = prompt("Inserisci un numero di 4 cifre");

if (parseInt(userNumber.length) !== 4 || parseInt(userNumber) == NaN){
    alert("Valore inserito non corretto")
}


const firstNumber =parseInt(userNumber[0]) 
const secondNumber = parseInt(userNumber[1]) 
const thirdNumber = parseInt(userNumber[2]) 
const fourthNumber = parseInt(userNumber[3]) 

const somma = firstNumber + secondNumber + thirdNumber + fourthNumber

console.log(firstNumber);
console.log(somma);
