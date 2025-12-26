// --------------------
// Active navigation link
// --------------------
const navLinks = document.querySelectorAll(".nav a");
const currentPage = location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// --------------------
// Fade-in sections on scroll
// --------------------
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section, .hero").forEach(el => {
  el.classList.add("fade");
  observer.observe(el);
});

// --------------------
// Button hover effect (JS-controlled)
// --------------------
const mainButton = document.querySelector(".btn");

if (mainButton) {
  mainButton.addEventListener("mouseenter", () => {
    mainButton.style.transform = "scale(1.05)";
  });

  mainButton.addEventListener("mouseleave", () => {
    mainButton.style.transform = "scale(1)";
  });
}
