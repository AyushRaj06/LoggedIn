function validateForm() {

    // Regex to match the values
    const emailRegex = /^(?!.*([A-Za-z0-9]{3,}))\w+@\w+\.\w+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])\S{8,}$/;

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    try {
        // Check for empty fields
        if (email === "" || password === "") {
            throw new Error("Both fields are required!");
        }

        // Validate email and password using regex
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format.");
        }

        if (!passwordRegex.test(password)) {
            // Break down password requirements for better error messages
            if (password.length < 8) {
                throw new Error("Password must be at least 8 characters long.");
            }
            if (!/[a-z]/.test(password)) {
                throw new Error("Password must contain at least one lowercase letter.");
            }
            if (!/[A-Z]/.test(password)) {
                throw new Error("Password must contain at least one uppercase letter.");
            }
            if (!/\d/.test(password)) {
                throw new Error("Password must contain at least one number.");
            }
            if (!/[#@\$%^&+=]/.test(password)) {
                throw new Error("Password must contain at least one special character.");
            }
            // If none of the above conditions are met, the password is invalid
            throw new Error("Invalid password format.");
        }

        // If  validation passes, redirect to home.html
        window.location.href = "C:\Users\KIIT\Desktop\CS50aug29\home.html";
        return false; // Prevent form submission
    } catch (error) {
        alert(error.message);
        return false; // Prevent form submission
    }
}

// Clear button functionality
document.getElementById("clear-button").addEventListener('click', function() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});