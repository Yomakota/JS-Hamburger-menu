// Hamburger menu:
// mostrare / nascondere il menu principale
// (per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

// Hamburger menu:
let Menu = document.querySelector('.fa-bars');
let hamburgerMenu = document.querySelector('.hamburger-menu');

// mostrare il menu principale
Menu.addEventListener('click', function () {
    hamburgerMenu.style.display = 'block';
})

// icona chiudere menu
let Closedmenu = document.querySelector('.fa-times');

// nascondere il menu principale
Closedmenu.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
})