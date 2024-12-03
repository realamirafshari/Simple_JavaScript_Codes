const container = document.querySelector("body");
const button = document.querySelectorAll(".switch");
const toggle = document.querySelectorAll(".toggle");

const generateRandomColor = () => {
  let captchaString = "#";
  const letterString = "abcdef0123456789";
  for (let i = 0; i < 6; i++) {
    captchaString +=
      letterString[Math.floor(Math.random() * letterString.length)];
  }
  return captchaString;
};

const toggleClickHandler = (currentBtn) => {
  button.forEach((btn) => {
    btn.classList.remove("active");
  });
  currentBtn.classList.add("active");
  container.style.backgroundColor =
    currentBtn.childNodes[1].style.backgroundColor;
  console.dir(currentBtn.childNodes[1].style.backgroundColor);
};

toggle.forEach((item) => {
  item.style.backgroundColor = generateRandomColor();
});
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleClickHandler(btn);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  container.style.backgroundColor =
    button[0].childNodes[1].style.backgroundColor;
});
