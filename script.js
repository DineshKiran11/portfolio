const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

/* Mobile Menu */

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* Typing Animation */

const roles = [
  "Python Full Stack Developer",
  "Web Developer",
  "AI & ML Enthusiast",
  "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const typingText = document.getElementById("typing-text");

  if (!typingText) return;

  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent =
      currentRole.substring(0, charIndex++);
  } else {
    typingText.textContent =
      currentRole.substring(0, charIndex--);
  }

  if (!deleting && charIndex === currentRole.length + 1) {
    deleting = true;
    setTimeout(typeEffect, 1500);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/* Scroll Reveal */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});