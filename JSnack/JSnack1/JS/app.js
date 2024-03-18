console.log('JS Snacks 1')

// Inserire due numeri in successione con 2 prompt.
// - Stampare il maggiore.

// Aggiungere primo numero con prompt
const nr1 = parseFloat(prompt('Inserisci un numero'));
// console.log(nr1);

// Aggiungere secondo numero con prompt
const nr2 = parseFloat(prompt('Inserisci un numero'));
// console.log(nr2);

// SE i dati inseriti sono validi:
!isNaN(nr1);
!isNaN(nr2);

// Inserisci il primo numero e SE
if (nr1 > nr2) {
    console.log(nr1);
    }

    // ALTRIMENTI SE inserisci il secondo numero e
    else if (nr2 > nr1) {
        console.log(nr2);
    }
    
    // ALTRIMENTI i dati inseriti non sono validi
    else {
        alert('Dati inseriti non validi');
    }

