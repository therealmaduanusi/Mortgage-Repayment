let mortgageActiveState = document.querySelectorAll(".mortage");
// const radioButtons = document.querySelectorAll('form input[type="radio"]');
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
    let declaration = document.styleSheets[0].cssRules[0].style;
    // console.log(declaration);
    radioButtons.forEach((rb) => rb.classList.remove("active-radio"));
    radio.classList.add("active-radio");
  });
});

// Calculation selections
const result = document.querySelector(".result");
const submit = document.querySelector('button[type="submit"]');
const mortageAmount = document.getElementById("mortgage-amount");
const mortageTerm = document.getElementById("Mortgage-term");
const mortageRate = document.getElementById("Mortgage-rate");
submit.addEventListener("click", (e) => {
  e.preventDefault();
//   console.log(radioButtons[0].classList.contains("active-radio"));
  let mortageAmountValue = Number(mortageAmount.value.trim());
  let mortageTermValue = Number(mortageTerm.value.trim());
  let mortageRateValue = Number(mortageRate.value.trim());
  if (
    (mortageAmountValue &&
      mortageTermValue &&
      mortageRateValue &&
      radioButtons[0].classList.contains("active-radio")) ||
    radioButtons[1].classList.contains("active-radio")
  ) {
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
    let mortages = document.querySelectorAll('.mortage')
    if (mortageAmount.value.trim()) {
        mortageAmount.parentElement.classList.remove('border-error')
        mortageAmount.previousElementSibling.classList.remove('span-error')
    } else {
        mortageAmount.parentElement.classList.add('border-error')
        mortageAmount.previousElementSibling.classList.add('span-error')
    }

    if (mortageTerm.value.trim()) {
        mortageTerm.parentElement.classList.remove('border-error');
        mortageTerm.nextElementSibling.classList.remove('span-error')
    } else {
        mortageTerm.parentElement.classList.add('border-error');
        mortageTerm.nextElementSibling.classList.add('span-error')
    }

    if (mortageRate.value.trim()) {
        mortageRate.parentElement.classList.remove('border-error');
        mortageRate.nextElementSibling.classList.remove('span-error')
    } else {
        mortageRate.parentElement.classList.add('border-error');
        mortageRate.nextElementSibling.classList.add('span-error')
    }
    // alert("please input a value");
  }
});
