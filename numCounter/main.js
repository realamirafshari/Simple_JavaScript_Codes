const element = document.querySelector(".conter");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
let conter = 0;

plusBtn.addEventListener("click", plus);
minusBtn.addEventListener("click", minus);

function plus() {
  if (conter < 9) {
    conter++;
    element.innerText = conter;
  }
}

function minus() {
  if (conter > 0) {
    conter--;
    element.innerText = conter;
  }
}
