$(document).ready(function () {
    $('#signUpForm').submit(function (e) {
        e.preventDefault();

        // Validation 1: Empty Fields (Common)
        // ... (Same as signIn.js) ...

        // Validation 2: Email Format
        // ... (Same as signIn.js) ...

        // Validation 3: Phone Number (Basic)
        let phone = $('#phone').val();
        // Allow only digits
        if (!/^\d+$/.test(phone) || phone.length !== 10) {
            $('#phone + .error-message').text('Please enter a valid 10-digit phone number');
            return false;
        } else {
            $('#phone + .error-message').text('');
        }

        // If validations pass:
        $('#signUpForm')[0].submit();
    });
});