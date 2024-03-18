console.log("JS Snacks 1");

// Inserire due numeri in successione con 2 prompt.
// - Stampare il maggiore.

// Aggiungere primo numero con prompt
const nr1 = prompt("Inserisci un numero"); // String
// console.log(nr1);

// Aggiungere secondo numero con prompt
const nr2 = prompt("Inserisci un numero"); // String
// console.log(nr2);

// SE nr1 è un NUmber e nr2 Number

if (!isNaN(nr1) && !isNaN(nr2)) {
  // Inserisci il primo numero e SE
    const nr1Float = parseFloat(nr1); // Number
    const nr2Float = parseFloat(nr2); // Number

  if (nr1Float > nr2Float) {
    console.log(nr1Float);
  }

  // ALTRIMENTI SE inserisci il secondo numero e
  else if (nr2Float > nr1Float) {
    console.log(nr2Float);
  }

  // ALTRIMENTI i dati inseriti non sono validi
} else {
  alert("Dati inseriti non validi");
}
