console.log('JS Snacks 4')

// Inseriamo in un Array l'elenco degli invitati alla festa
// - Chiedere all'utente il nome
// - SE c'è può partecipare
// - ALTRIMENTI non può partecipare

// Lista invitati
const nomi = ['Mario', 'Luigi', 'Daisy', 'Boo', 'Bowser'];
// console.log(nomi);

//Chiediamo all'utente il nome
const nomeInvitato = prompt('Mi dica il suo nome');
// console.log(nomeInvitato);

// In questo momento il nome non è stato verificato quindi non è presente
let invito = false;

// Verifichiamo se l'utente è nella lista

for (i = 0; i < nomi.length; i++) {
    if (nomi[i] === nomeInvitato) {
        invito = true;
        break;
    }
}

// Avviso l'utente se può o non può entrare
if (invito) {
    console.log('Benvenuto/a alla festa!');
} else {
    console.log('Il suo nome non è nella lista non può entrare, mi dispiace.')
}

