console.log('JS Snacks 4')

// Inseriamo in un Array l'elenco degli invitati alla festa
// - Chiedere all'utente il nome
// - SE c'è può partecipare
// - ALTRIMENTI non può partecipare

// Lista invitati
const nomi = ['Mario', 'Luigi', 'Daisy', 'Boo', 'Bowser'];

//Chiediamo all'utente il nome
const nomeInvitato = prompt('Mi dica il suo nome');
console.log(nomeInvitato);

// Verifichiamo se l'utente è nella lista

for (i = 0; i < nomi; i++) {
    if (nomi[i] === nomeInvitato) {
        console.log('Il signor' + nomeInvitato + 'può entrare');
        break;
    }
    // Se non è nella lista
    else {
        alert('Non puoi entrare')
    }
}
