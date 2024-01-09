function checkAge() {
    let ageInput = document.getElementById('ageInput');
    let age = parseInt(ageInput.value);

    if (!isNaN(age)) {
        if (age >= 0) {
            let ageCard = document.getElementById('ageCard');
            let ageStatus = document.getElementById('ageStatus');

            if (age >= 18) {
                ageStatus.textContent = 'You are an adult.';
            }
            
            else {
                ageStatus.textContent = 'You are a child.';
            }

            ageCard.style.display = 'block';
        }
        
        else {
            ageStatus.textContent = 'Age cannot be negative, enter a valid age.';
            ageInput.value = 0;
        }
    } 
    else {

        ageStatus.textContent = 'Enter a valid age.';
        ageInput.value = 0;
    }
}
