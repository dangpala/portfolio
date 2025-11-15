// Theme toggle logic with persistence
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "☀";
}

// Toggle on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");

  toggleBtn.textContent = isLight ? "☀" : "☾";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Subtle scroll fade-out
window.addEventListener("scroll", () => {
  const content = document.querySelector(".content");
  content.style.opacity = 1 - window.scrollY / 300;
});
