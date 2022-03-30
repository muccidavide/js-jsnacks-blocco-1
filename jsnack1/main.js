/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
 */

// 

const Number1User = parseInt(prompt("Inserisci un numero"));

const Number2User = parseInt(prompt("Inserisci un altro numero"));

if (Number1User > Number2User) {
    console.log(Number1User);
} else if (Number1User < Number2User){
    console.log(Number2User);
} else {
    console.log("patta");
}
