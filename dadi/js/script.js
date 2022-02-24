const valComputer = document.querySelector('.computer');
const valUser = document.querySelector('.you');
const risultato = document.querySelector('.result');
const btnRefresh = document.querySelector('.refresh');

let imgDadoPc = document.getElementById("imagePc");
let imgDadoYou = document.getElementById("imageYou");

let valoreDadiComputer = Math.floor(Math.random() * 6) + 1;
let valoreDadiTu = Math.floor(Math.random() * 6) + 1;

valComputer.innerHTML = 'Il Computer ha tirato:';
valUser.innerHTML = 'Tu hai tirato:';

switch (valoreDadiComputer) {
    case 1:imgDadoPc.src = "img/1.png";
    break;
    case 2:imgDadoPc.src = "img/2.png";
    break;
    case 3:imgDadoPc.src = "img/3.png";
    break;
    case 4:imgDadoPc.src = "img/4.png";
    break;
    case 5:imgDadoPc.src = "img/5.png";
    break;
    case 6:imgDadoPc.src = "img/6.png";
    break;
}
switch (valoreDadiTu) {
    case 1:imgDadoYou.src = "img/1.png";
    break;
    case 2:imgDadoYou.src = "img/2.png";
    break;
    case 3:imgDadoYou.src = "img/3.png";
    break;
    case 4:imgDadoYou.src = "img/4.png";
    break;
    case 5:imgDadoYou.src = "img/5.png";
    break;
    case 6:imgDadoYou.src = "img/6.png";
    break;
}

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






// switch ()
//   imgDadoPc.src = "../img/1.jpg";
//   document.body.appendChild(img);

