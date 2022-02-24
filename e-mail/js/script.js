let inputEmail = document.querySelector('.login');
let btnLogin = document.querySelector('.btn-login');

const eMail = ["mail@gmail.com", "mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com", "mail5@gmail.com"]

btnLogin.addEventListener('click', function() { 
let trovato = false;
    for (let i = 0; i < eMail.length; i++) {

        if (eMail[i] == inputEmail.value) {
            trovato = true;
        }
    }
    
    if (trovato == false) {
        alert('La tua e-mail non è registrata');
    } else {
        alert('Stai per essere indirizzato alla tua HomePage');
    }

});