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
