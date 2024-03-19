console.log("JS Snacks 6");

// Generare un numero random da 0 a 10 e chiedere all'utente di inserire un suo numero.
// SE il numero scelto dall'utente è uguale al nuemero del computer informare l'utente che ha vinto.
// ALTRIMENTI ditegli che ha perso.

// Scrivo una variabile senza assegnazione da utilizzare nel do-while
let numeroUtente = 0;

// Genero il numero casuale con Math.random
const numeroComputer = Math.floor(Math.random() * 11);
// console.log(numeroComputer);

// Creo il prompt per far inserire il numero all'utente che sia compreso fra 0 e 10
do {
  nomeUtente = parseInt(prompt("Inserisci un numero da 0 a 10"));

  // Validazione dati inseriti
} while (isNaN(numeroUtente) || numeroUtente < 0 || numeroUtente > 10);

// Dico all'utente se ha vinto o perso
if (numeroUtente === numeroComputer) {
  alert("Hai vinto! Il numero è: " + numeroComputer);
} else {
  alert("Hai perso! Il numero è: " + numeroComputer);
}
