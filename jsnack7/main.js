// potenza di due fino a 1000
let potenzaArray = [];
let contatore = 0;

for( i = 0; contatore < 1000; i++){
    contatore = Math.pow(2,i)
    if (contatore < 1000){
        potenzaArray.push(contatore)
    }
     
}

console.log(potenzaArray);