document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the username from localStorage (you can retrieve from the URL or sessionStorage if needed)
    var username = localStorage.getItem('username'); // e.g., '2'

    if (username !== null) {
        // Retrieve the user data from localStorage using the username as the key
        var userData = JSON.parse(localStorage.getItem(username));
        
        if (userData) {
            // Populate the profile fields with the user data
            document.getElementById('profile-username').textContent = userData.username;
            document.getElementById('profile-email').textContent = userData.email;
            document.getElementById('profile-password').textContent = userData.password; // Avoid showing password directly in production.
        } else {
            console.log("User data not found.");
        }
    } else {
        console.log("Username not found.");
    }
});
