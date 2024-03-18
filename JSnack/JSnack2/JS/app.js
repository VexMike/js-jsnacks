console.log('JS Snacks 2')

// Inserire due parole in successione con 2 prompt.
// - Stampare la prima parola più corta, poi la più lunga.

// Aggiungere 1a variabile parola con prompt
let par1 = prompt('Inserisci la parola'); // String
// console.log(par1);

// Aggiungere 2a variabile con prompt
let par2 = prompt('Inserisci la parola'); // String
// console.log(par2);

// Validare i dati inseriti:
par1 = ;
par2 = ;

// Inserisco la prima parola e SE
if (par1.length < par2.length) {
    console.log(par1, par2);
}

// ALTRIMENTI SE inserisco la seconda parola
else if (par2.length < par1.length) {
    console.log(par2, par1);
}

else {
    alert('Dati inseriti non validi')
}
