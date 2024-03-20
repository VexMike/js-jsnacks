console.log('JS Snacks 3')

// Chiedere all'utente di inserire 10 numeri.
// - Il programma stampa la somma di tutti i numeri.

// Inseriamo la variabile
let num1 = 0;
// console.log(num1)

// Chiediamo 10 volte un numero all'utente
for (let i = 0; i < 10; i++) {
    // while (isNaN(num1)) {
    //     num1 = prompt('Dati inseriti non validi: inserisci un numero')
    // }
    const num2 = prompt('Inserisci un numero');
    num1 += parseFloat(num2);
}

console.log('Somma totale dei numeri inseriti: ', num1, typeof num1);
