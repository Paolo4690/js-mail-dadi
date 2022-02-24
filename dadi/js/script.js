// SELEZIONO ELEMENTI HTML 
const valComputer = document.querySelector('.computer');
const valUser = document.querySelector('.you');
const risultato = document.querySelector('.result');
const btnRefresh = document.querySelector('.refresh');

let imgDadoPc = document.getElementById("imagePc");
let imgDadoYou = document.getElementById("imageYou");

// CREO NUMERI DADI RANDOM 
let valoreDadiComputer = Math.floor(Math.random() * 6) + 1;
let valoreDadiTu = Math.floor(Math.random() * 6) + 1;

// STAMPO RISULTATI CON IMG DADI
valComputer.innerHTML = 'Il Computer ha tirato:';
valUser.innerHTML = 'Tu hai tirato:';
imgDadoPc.src = "img/"+valoreDadiComputer+".png";
imgDadoYou.src = "img/"+valoreDadiTu+".png";


// LOGICA PROGRAMMA
if (valoreDadiComputer > valoreDadiTu) {
    risultato.classList.add('red');
    risultato.innerHTML = 'Il Computer ha vinto';
} else if (valoreDadiComputer < valoreDadiTu) {
    risultato.classList.add('green');
    risultato.innerHTML = 'Tu hai vinto';
} else {
    risultato.innerHTML = 'Tu e il Computer avete pareggiato';
}

// BOTTONE RIGIOCA
btnRefresh.addEventListener('click', function() {
    location.reload();
})