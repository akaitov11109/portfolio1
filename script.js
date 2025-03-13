document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-bar");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
        burger.classList.toggle("active");
    });
});