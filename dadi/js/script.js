const valComputer = document.querySelector('.computer');
const valUser = document.querySelector('.you');
const risultato = document.querySelector('.result');
const btnRefresh = document.querySelector('.refresh');

let valoreDadiComputer = Math.floor(Math.random() * 6) + 1;
let valoreDadiTu = Math.floor(Math.random() * 6) + 1;
valComputer.innerHTML = 'Il Computer ha tirato: ' + valoreDadiComputer;
valUser.innerHTML = 'Tu hai tirato: ' + valoreDadiTu;

if (valoreDadiComputer > valoreDadiTu) {
    risultato.innerHTML = 'Il Computer ha vinto';
} else if (valoreDadiComputer < valoreDadiTu) {
    risultato.innerHTML = 'Tu hai vinto';
} else {
    risultato.innerHTML = 'Tu e il Computer avete pareggiato, giocate di nuovo';
}

btnRefresh.addEventListener('click', function() {
    location.reload();
})