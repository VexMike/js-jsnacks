console.log("JS Snacks 5");

// Creare un Array vuoto.
// Chiedere un numero all'utente per 6 volte:
// - SE è dispari, inseriscilo nell'Array
// - ALTRIMENTI non inserirlo
// Stampare l'Array alla fine

// Creo Array vuoto
const numeriDispari = [];

// Chiedo di inserire il numero all'utente 6 volte

for (i = 0; i < 6; i++) {
  // Chiedo all'utente un numero
  const richiesta = prompt("Inserisci un numero");
//   console.log(richiesta);

  // Controllo se il numero è dispari
  if (richiesta % 2 !== 0) {
    // Inserisco il numero nell'Array
    numeriDispari.push(richiesta);
  }
}

console.log('Numeri dispari emessi: ', numeriDispari);