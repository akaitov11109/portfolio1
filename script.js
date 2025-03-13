document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-bar");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
        burger.classList.toggle("active");
    });

    // Закрытие меню после клика на ссылку в меню
    const navLinks = document.querySelectorAll(".nav-bar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
            burger.classList.remove("active");
        });
    });

    // Закрытие бургер-меню при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            burger.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });
});