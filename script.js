const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        slideStep(formStepsNum, formStepsNum + 1);
        formStepsNum++;
        updateProgressbar();
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        slideStep(formStepsNum, formStepsNum - 1, true);
        formStepsNum--;
        updateProgressbar();
    });
});

// Slide function
function slideStep(current, next, reverse = false) {
    formSteps.forEach((step, index) => {
        step.classList.remove("active", "previous");
        if (index === next) {
            step.classList.add("active");
        }
        if (reverse && index === current) {
            step.classList.add("previous");
        }
    });
}

// Update progress bar
function updateProgressbar() {
    progressSteps.forEach((step, idx) => {
        if (idx <= formStepsNum) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
    const activeSteps = document.querySelectorAll(".progress-step.active");
    progress.style.width = ((activeSteps.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

// Prevent future dates for DOB
const dobInput = document.getElementById("dob");
const today = new Date().toISOString().split("T")[0];
dobInput.setAttribute("max", today);

