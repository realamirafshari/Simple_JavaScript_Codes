const body = document.querySelector("body");
const toggleButton = document.querySelector(".toggle-button");
const toggleCircle = document.querySelector(".toggle-circle");
const mainContent = document.querySelector(".main-content");
const amText = document.querySelector(".am");
const pmText = document.querySelector(".pm");

toggleButton.addEventListener("click", () => {
  toggleCircle.classList.toggle("move-toggle-circle");

  if (toggleCircle.classList.contains("move-toggle-circle")) {
    pmText.classList.add("target-text");
    amText.classList.remove("target-text");
    toggleCircle.innerHTML = "<i class='bx bx-moon'></i>";

    toggleButton.classList.add("night-backgrund");
    mainContent.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    toggleCircle.innerHTML = "<i class='bx bx-sun'></i>";
    pmText.classList.remove("target-text");
    amText.classList.add("target-text");
    toggleButton.classList.remove("night-backgrund");
    mainContent.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    toggleCircle.innerHTML = "<i class='bx bx-sun'></i>";
    pmText.classList.remove("target-text");
    amText.classList.add("target-text");
    toggleButton.classList.remove("night-backgrund");
    mainContent.classList.remove("dark-mode");
  } else {
    toggleCircle.innerHTML = "<i class='bx bx-moon'></i>";
    pmText.classList.add("target-text");
    amText.classList.remove("target-text");
    toggleCircle.classList.add("move-toggle-circle");
    toggleButton.classList.add("night-backgrund");
    mainContent.classList.add("dark-mode");
  }
});
