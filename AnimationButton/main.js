const button = document.querySelector(".button");
const buttonContent = document.querySelector(".button-content");
button.addEventListener("click", () => {
  button.classList.add("active");
  buttonContent.classList.add("move-down");
  setTimeout(() => {
    button.classList.remove("active");
    buttonContent.classList.remove("move-down");
    buttonContent.innerHTML = `
  <i class="bx bx-check icon-check"></i>
        <span class="button-text">Completed</span>
        `;
  }, 7000);
});
