let inputEmail = document.querySelector('.login');
let btnLogin = document.querySelector('.btn-login');
let result = document.querySelector('h2');

const eMail = ["mail0@gmail.com", "mail1@gmail.com", "mail2@gmail.com", 
                "mail3@gmail.com", "mail4@gmail.com", "mail5@gmail.com",
                "mail6@gmail.com", "mail7@gmail.com", "mail8@gmail.com", "mail9@gmail.com"]

btnLogin.addEventListener('click', function() { 
let trovato = false;
    for (let i = 0; i < eMail.length; i++) {

        if (eMail[i] == inputEmail.value) {
            trovato = true;
        }
    }
    
    if (trovato == false) {
        result.innerHTML = ('La tua e-mail non è registrata');
    } else {
        result.innerHTML = ('Stai per essere indirizzato alla tua HomePage');
    }

});