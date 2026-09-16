const themeButton = document.getElementById("themeButton");

function updateThemeButton() {
  if (!themeButton) {
    return;
  }

  const isLightTheme = document.body.classList.contains("light-theme");

  themeButton.setAttribute("aria-pressed", String(isLightTheme));
  themeButton.setAttribute(
    "aria-label",
    isLightTheme ? "Switch to dark theme" : "Switch to light theme"
  );
}

if (themeButton) {
  try {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-theme");
    }
  } catch (error) {
    // The theme still works if the browser blocks localStorage.
  }

  updateThemeButton();

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const selectedTheme = document.body.classList.contains("light-theme") ? "light" : "dark";

    try {
      localStorage.setItem("theme", selectedTheme);
    } catch (error) {
      // Saving the choice is optional; switching the theme must still work.
    }

    updateThemeButton();
  });
}
