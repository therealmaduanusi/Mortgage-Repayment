let mortgageActiveState = document.querySelectorAll(".mortage");
const lableButtons = document.querySelectorAll("form .label-radio");
const radioButtons = document.querySelectorAll("form .radio-input");
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

lableButtons.forEach((label) => {
  label.addEventListener("change", () => {
    lableButtons.forEach((rb) => rb.classList.remove("active-radio"));
    label.classList.add("active-radio");
  });
});

// if (radio.checkVisibility()) {
// Calculation selections
const result = document.querySelector(".result");
const submit = document.querySelector('button[type="submit"]');
const mortageAmount = document.getElementById("mortgage-amount");
const mortageTerm = document.getElementById("Mortgage-term");
const mortageRate = document.getElementById("Mortgage-rate");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(radio.checkVisibility());

  let mortageAmountValue = Number(mortageAmount.value.trim());
  let mortageTermValue = Number(mortageTerm.value.trim());
  let mortageRateValue = Number(mortageRate.value.trim());

  let isRadioChecked = Array.from(radioButtons).some((radio) => radio.checked);
  // console.log(isRadioChecked);

  function calculateMortgage(
    mortageAmountValue,
    mortageRateValue,
    mortageTermValue
  ) {
    const monthlyInterestRate = mortageRateValue / 12 / 100;
    const numberOfPayments = years * 12;

    const numerator =
      monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyPayment = mortageAmountValue * (numerator / denominator);

    return monthlyPayment.toFixed(2); // Rounded to two decimal places
  }

  // Example values
  const principal = 300000; // £300,000
  const annualInterestRate = 5.25; // 5.25%
  const years = 25; // 25 years

  const monthlyPayment = calculateMortgage(
    mortageAmountValue,
    mortageRateValue,
    mortageTermValue
  );
  // console.log(`Monthly Mortgage Payment: £${monthlyPayment}`);

  if (!isRadioChecked) {
    document.querySelector(".field-four").style.display = "block";
  } else {
    document.querySelector(".field-four").style.display = "none";
  }
  if (mortageAmountValue && mortageTermValue && mortageRateValue && isRadioChecked) {
    result.innerHTML = `
          <h3 class="result-h3">Your results</h3>
          <p class="result-p">
            Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
          </p>
          <div class="total-result">
            <div class="monthly">
            <p>Your monthly repayments</p>
            <h3>£${monthlyPayment}</h3>
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
// }
