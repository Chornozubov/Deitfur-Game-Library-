const themeButton = document.getElementById("themeButton");

function updateThemeButton() {
  const isLightTheme = document.body.classList.contains("light-theme");

  themeButton.textContent = isLightTheme ? "🌙 Dark theme" : "☀️ Light theme";
  themeButton.setAttribute(
    "aria-label",
    isLightTheme ? "Switch to dark theme" : "Switch to light theme"
  );
}

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
}

updateThemeButton();

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const selectedTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("theme", selectedTheme);
  updateThemeButton();
});
