// Rolagem por seção
const sections = document.querySelectorAll(".case-section");
const navLinks = document.querySelectorAll(".site-nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isCurrent);
      });
    });
  },
  {
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  }
);

sections.forEach((section) => observer.observe(section));


// Menu hamburguer
const hamburger = document.querySelector(".hamburger");
const siteNav = document.querySelector(".site-nav");

// Abre e fecha o menu lateral ao clicar no botão de três linhas / "X"
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  siteNav.classList.toggle("open");
});

// Fecha o menu automaticamente ao clicar em qualquer palavra/link do menu
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active"); // Volta o botão para as 3 linhas
    siteNav.classList.remove("open");     // Recolhe o menu lateral para a direita
  });
});
