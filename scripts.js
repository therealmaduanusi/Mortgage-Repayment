let mortgageActiveState = document.querySelectorAll('.mortage');
// const radioButtons = document.querySelectorAll('form input[type="radio"]');
const radioButtons = document.querySelectorAll('form .label-radio');


// console.log(radioButtons);
mortgageActiveState.forEach(mortgageActive => {
    mortgageActive.addEventListener('click', () => {
        let current = document.getElementsByClassName("active");
        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        mortgageActive.className = " active";
    })
})

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        let declaration = document.styleSheets[0].cssRules[0].style;
        console.log(declaration);
        radioButtons.forEach(rb => rb.classList.remove('active-radio'));
        radio.classList.add('active-radio');
    });
});

// Calculation selections
const result = document.querySelector('.result');
const submit = document.querySelector('button[type="submit"]')
const mortageAmount = document.getElementById('mortgage-amount');
const mortageTerm = document.getElementById('Mortgage-term');
const mortageRate = document.getElementById('Mortgage-rate');
submit.addEventListener('click', (e) => {
    e.preventDefault()
    let mortageAmountValue = mortageAmount.value.trim();
    let mortageTermValue = mortageTerm.value.trim();
    let mortageRateValue = mortageRate.value.trim();

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
        `
    } else {
        alert('please input a value')
    }
})