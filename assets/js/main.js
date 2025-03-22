/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) {
        navMenu.classList.remove("show");
    }
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id"),
              sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add("active-link");
            } else {
                sectionsClass.classList.remove("active-link");
            }
        }
    });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
    // reset: true  // Uncomment this if you want animations to repeat
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

/*===== DARK MODE TOGGLE =====*/
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-icon");
    const body = document.body;

    if (!darkModeToggle) {
        console.error("Dark mode icon not found! Make sure the ID is correct.");
        return;
    }

    // Check localStorage for previous mode
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.classList.replace("bx-moon", "bx-sun");
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.classList.replace("bx-moon", "bx-sun");
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.classList.replace("bx-sun", "bx-moon");
        }
    });
});
const navMenu = document.querySelector('.nav__menu');
const toggleButton = document.querySelector('.nav__toggle');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Adds 'right: 0'
});
