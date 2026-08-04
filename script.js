/* ==========================================================
   THE MUNDO LEAGUE
   Hall of Fame
   Version 3.0
========================================================== */

// Navigation background on scroll

window.addEventListener("scroll", () => {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = this.getAttribute('href');

        if (target.startsWith("#")) {

            const section = document.querySelector(target);

            if (section) {

                e.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});
