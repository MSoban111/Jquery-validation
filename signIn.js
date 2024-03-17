$(document).ready(function () {
    $('#signInForm').submit(function (e) {
        e.preventDefault();

        // Validation 1: Empty Fields (Common)
        $('input').each(function () {
            if ($(this).val().trim() === '') {
                $(this).next('.error-message').text($(this).attr('placeholder') + ' is required');
                return false;
            } else {
                $(this).next('.error-message').text(''); // Clear error
            }
        });

        // Validation 2: Email Format
        let email = $('#email').val();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#email + .error-message').text('Please enter a valid email address');
            return false;
        } else {
            $('#email + .error-message').text(''); // Clear error
        }

        // If validations pass:
        $('#signInForm')[0].submit();
    });
});