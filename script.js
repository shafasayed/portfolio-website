const themeButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');

function updateThemeButton() {
  const darkModeIsActive = document.body.classList.contains('dark-mode');

  if (darkModeIsActive) {
    themeButton.textContent = 'Light mode';
    themeButton.setAttribute('aria-label', 'Switch to light mode');
  } else {
    themeButton.textContent = 'Dark mode';
    themeButton.setAttribute('aria-label', 'Switch to dark mode');
  }
}

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

updateThemeButton();

themeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  const darkModeIsActive = document.body.classList.contains('dark-mode');

  if (darkModeIsActive) {
    localStorage.setItem('portfolio-theme', 'dark');
  } else {
    localStorage.setItem('portfolio-theme', 'light');
  }

  updateThemeButton();
});