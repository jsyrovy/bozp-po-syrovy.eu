// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Toggle icon
    const icon = mobileMenuButton.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    } else {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        const icon = mobileMenuButton.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});

// Scroll to Top Button
const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.classList.remove("hidden");
    } else {
        scrollTopButton.classList.add("hidden");
    }

    // Highlight active section in navigation
    highlightActiveSection();
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Highlight active section in navigation
function highlightActiveSection() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("text-primary", "font-bold");
        link.classList.add("text-gray-700");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.remove("text-gray-700");
            link.classList.add("text-primary", "font-bold");
        }
    });
}

// Navbar shadow on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add("shadow-lg");
    } else {
        navbar.classList.remove("shadow-lg");
        navbar.classList.add("shadow-md");
    }
});

// Smooth scroll for all anchor links (fallback for browsers that don't support CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    });
});

// Add animation on scroll (fade in elements)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(section);
});

// Set first section (hero) to visible immediately
document.getElementById("hero").style.opacity = "1";
document.getElementById("hero").style.transform = "translateY(0)";
