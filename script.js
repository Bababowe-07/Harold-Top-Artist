document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    function handleScroll() {
        if (container.getBoundingClientRect().top < window.innerHeight / 1.2) {
            container.classList.add("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const genreBoxes = document.querySelectorAll(".genre-box");
    let currentAudio = null;

    genreBoxes.forEach((box) => {
        const audioSrc = box.getAttribute("data-audio");

        box.addEventListener("mouseenter", () => {
            if (currentAudio) currentAudio.pause();
            currentAudio = new Audio(audioSrc);
            currentAudio.loop = true;
            currentAudio.play();
        });

        box.addEventListener("mouseleave", () => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio = null;
            }
        });
    });
});

const video = document.getElementById("video-player");
video.style.opacity = "0.5";
video.addEventListener("click", () => video.style.opacity = "1");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) video.pause();
    });
}, { threshold: 0.1 });

observer.observe(video);

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".artist-card, .video-container");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("active");
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function updateActiveNav() {
        let currentSection = "";

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 50) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
});
