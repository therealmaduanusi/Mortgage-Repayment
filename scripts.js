let mortgageActiveState = document.querySelectorAll(".mortage");
const radioButtons = document.querySelectorAll("form .label-radio");

// console.log(radioButtons);
mortgageActiveState.forEach((mortgageActive) => {
  mortgageActive.addEventListener("click", () => {
    let current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    mortgageActive.className = "mortage-amount mortage active";
  });
});

radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    radioButtons.forEach((rb) => rb.classList.remove("active-radio"));
    radio.classList.add("active-radio");
  });
  if (radio.checkVisibility()) {
    document.querySelector(".field-four").style.display = "block";
  }
});

// Calculation selections
const result = document.querySelector(".result");
const submit = document.querySelector('button[type="submit"]');
const mortageAmount = document.getElementById("mortgage-amount");
const mortageTerm = document.getElementById("Mortgage-term");
const mortageRate = document.getElementById("Mortgage-rate");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  let mortageAmountValue = Number(mortageAmount.value.trim());
  let mortageTermValue = Number(mortageTerm.value.trim());
  let mortageRateValue = Number(mortageRate.value.trim());
  if (mortageAmountValue && mortageTermValue && mortageRateValue) {
    result.innerHTML = `
            <h3 class="result-h3">Your results</h3>
            <p class="result-p">
                Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
            </p>
            <div class="total-result">
                <div class="monthly">
                <p>Your monthly repayments</p>
                <h3>£${mortageAmountValue}</h3>
                </div>
                <div class="total">
                <p>Total you'll repay over the term</p>
                <h3>£${mortageAmountValue}</h3>
                </div>
            </div>
        `;
  } else {
    if (mortageAmount.value.trim()) {
      mortageAmount.parentElement.classList.remove("border-error");
      mortageAmount.previousElementSibling.classList.remove("span-error");
      document.querySelector(".field-one").style.display = "none";
    } else {
      mortageAmount.parentElement.classList.add("border-error");
      mortageAmount.previousElementSibling.classList.add("span-error");
      document.querySelector(".field-one").style.display = "block";
    }

    if (mortageTerm.value.trim()) {
      mortageTerm.parentElement.classList.remove("border-error");
      mortageTerm.nextElementSibling.classList.remove("span-error");
      document.querySelector(".field-two").style.display = "none";
    } else {
      mortageTerm.parentElement.classList.add("border-error");
      mortageTerm.nextElementSibling.classList.add("span-error");
      document.querySelector(".field-two").style.display = "block";
    }

    if (mortageRate.value.trim()) {
      mortageRate.parentElement.classList.remove("border-error");
      mortageRate.nextElementSibling.classList.remove("span-error");
      document.querySelector(".field-three").style.display = "none";
    } else {
      mortageRate.parentElement.classList.add("border-error");
      mortageRate.nextElementSibling.classList.add("span-error");
      document.querySelector(".field-three").style.display = "block";
    }
  }
});
