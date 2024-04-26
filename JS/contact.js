
const navBtn = document.getElementById("nav-btn")
const btnNav = document.querySelector('.nav-brand')
const navList = document.querySelector('.navbar-links')

navBtn.addEventListener('click', () =>{
    console.log("hello")
    navList.classList.toggle('navbar-collapse')
})


// ------------Contrôle du formulaire------------ //

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            // Vérifie si l'un des champs est vide
            event.preventDefault(); 
            alert('Veuillez remplir tous les champs du formulaire.');
        } else if (!isValidEmail(email)) {
            // Vérifie si l'email est valide
            event.preventDefault(); 
            alert('Veuillez entrer une adresse e-mail valide.');
        } else {
            console.log('message envoyé')
        }
    });
});

function isValidEmail(email) {
    // Vérifie si l'email est valide en utilisant une expression régulière
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


