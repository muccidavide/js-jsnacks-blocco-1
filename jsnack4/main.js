/* SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli 
se può partecipare o no alla festa.
 */


let invitati = ["luca" , "marco" , "davide" , "antonio"]
let userName = prompt("Come ti chiami?")
let access = false;

for(i = 0; i < invitati.length; i++){
    if (userName == invitati[i]) {
        access = true
    } 

}

if (access) {
    console.log('autorizzato');
} else {
    console.log('non autorizzato');
}
