/* SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */



const userWord1 = prompt("INserisci una parola");
const userWord2 = prompt("INserisci una parola");


if (userWord1.length < userWord2.length){
    console.log(userWord1 + " " +userWord2);
} else if (userWord1.length > userWord2.length){
    console.log(userWord2 + " " + userWord1 );
} else {
    console.log("le parole sono uguali");
}