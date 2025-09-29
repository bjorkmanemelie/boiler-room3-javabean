
//Deklarera variabler som hämtar element i från DOM.

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

//Lägg till en eventlistener på hamburgaren som lyssnar efter klick.
//När den blir klickad togglar den klassen 'is-open' på nav elementet.

hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
hamburger.setAttribute('aria-expanded', open); 
});