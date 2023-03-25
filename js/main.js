let navbarToggler = document.querySelector('.navbar-toggler');
let navbarMenu = document.querySelector('.navbar-nav');
let toggleNavbar = () => {
    navbarMenu.classList.toggle('d-block');
}
navbarToggler.addEventListener('click', toggleNavbar);

