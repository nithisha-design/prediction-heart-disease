// Client-side form validation and interaction script

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const submitButton = document.getElementById('submit');

    // Validate form fields on submit
    form.addEventListener('submit', function(event) {
        let valid = true;

        // Example validation: Check if name field is empty
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            valid = false;
            alert('Name is required.');
        }

        // Stop form submission if invalid
        if (!valid) {
            event.preventDefault();
        }
    });

    // Extra interaction: Disable submit button if necessary
    form.addEventListener('input', function() {
        const allFilled = Array.from(form.elements).every(input => input.value.trim() !== '');
        submitButton.disabled = !allFilled;
    });
});

