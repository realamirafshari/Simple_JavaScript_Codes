let currentStep = 0;
console.log(currentStep);

const lines = document.querySelectorAll(".line");
const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("back-btn");
const nextButton = document.getElementById("next-btn");

function changeStep(stepChange) {
  if (
    currentStep + stepChange < 0 ||
    currentStep + stepChange >= steps.length
  ) {
    return;
  }

  currentStep += stepChange;

  updateStep();
}

function updateStep() {
  steps.forEach((item, index) => {
    item.classList.toggle("active", index <= currentStep);
    if (index > 0) {
      lines[index - 1].classList.toggle("active", index <= currentStep);
    }
  });

  // Update button states
  backButton.disabled = currentStep === 0;
  nextButton.disabled = currentStep === steps.length - 1;
}

nextButton.addEventListener("click", () => changeStep(1));
backButton.addEventListener("click", () => changeStep(-1));

// Initial state
updateStep();
