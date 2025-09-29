const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
hamburger.setAttribute('aria-expanded', open);
});