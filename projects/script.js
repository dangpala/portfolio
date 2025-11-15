const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "☀";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  const isLight = body.classList.contains("light");
  toggleBtn.textContent = isLight ? "☀" : "☾";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
