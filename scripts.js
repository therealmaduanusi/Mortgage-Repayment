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
