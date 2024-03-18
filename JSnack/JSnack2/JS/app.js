console.log("JS Snacks 2");

// Inserire due parole in successione con 2 prompt.
// - Stampare la prima parola più corta, poi la più lunga.

// Aggiungere 1a variabile parola con prompt
const par1 = prompt("Inserisci la parola"); // String
// console.log(par1);

// Aggiungere 2a variabile con prompt
const par2 = prompt("Inserisci la parola"); // String
// console.log(par2);

// SE par1 e par2 sono stringhe

if (isNaN(par1) && isNaN(par2)) {
  // Inserisco la prima parola e SE
  const par1Lungh = par1.length;
  const par2Lungh = par2.lenght;

  if (par1Lungh < par2Lungh) {
    console.log(par1Lungh, par2Lungh);
  }

  // ALTRIMENTI SE inserisco la seconda parola
  else if (par2Lungh < par1Lungh) {
    console.log(par2Lungh, par1Lungh);
  }

  // ALTRIMENTI i dati inseriti non sono validi
} else {
  alert("Dati inseriti non validi");
}
