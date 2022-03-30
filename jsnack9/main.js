// Calcola la somma e la media dei primi dieci numeri
let sum = 0;
let sumArray = []

// se contiamo dal 1 al 10 ("primi dieci numeri")

for(i = 1; i < 11; i++ ){
    sum += i;
    sumArray.push(sum)
}
console.log(sum  + " somma");

let media = sum / sumArray.length;
console.log(media + " media");

// se contiamo dallo 0 al 9 ("primi dieci numeri")

let sum2 = 0;
let sumArray2 = []

for(i = 0; i < 10; i++ ){
    sum2 += i;
    sumArray2.push(sum2)
}
console.log(sum2  + " somma");

let media2 = sum2 / sumArray2.length;
console.log(media2 + " media");