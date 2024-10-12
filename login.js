// Show the modal when the page loads
window.onload = function() {
    document.getElementById('loginModal').style.display = 'block';
};

// Close the modal
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Simulate login functionality
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement your login logic here (e.g., check against a database)
    if (username && password) {
        closeModal();
        // Proceed to load the main page or set a logged-in state
    } else {
        alert('Please enter valid credentials.');
    }
}

// Simulate sign-up functionality
function signUp() {
    // Implement your sign-up logic here
    alert('Sign-up functionality is not implemented yet.');
}
