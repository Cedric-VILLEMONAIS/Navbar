document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector(".mobile-button");

    navbar.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});