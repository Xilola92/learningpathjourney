// Active navigation link
const links = document.querySelectorAll(".nav a");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Basic form validation (UI only)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const email = form.querySelector('input[type="email"]');
    if (email && !email.value.includes("@")) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
}

Add basic JavaScript interactions (v2)
