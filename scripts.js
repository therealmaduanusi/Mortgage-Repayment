let mortgageActiveState = document.querySelectorAll('.mortage');

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

