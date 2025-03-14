document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-bar");

    burger.addEventListener("click", function (e) {
        e.stopPropagation();  // Останавливаем распространение события, чтобы клик по бургеру не закрывал меню
        nav.classList.toggle("active");
        burger.classList.toggle("active");
    });

    // Закрытие меню при клике на любое место вне меню и бургера
    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove("active");
            burger.classList.remove("active");
        }
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
            scrollToTopButton.style.opacity = "1";
        } else {
            scrollToTopButton.style.opacity = "0";
            setTimeout(() => {
                if (window.scrollY <= 300) {
                    scrollToTopButton.style.display = "none";
                }
            }, 300); // Даем время для анимации исчезновения
        }
    });
});