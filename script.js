document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector(".navbar-a-active");

    navbar.addEventListener('click', () => {
        navbar.classList.toggle('actives');
    });
});