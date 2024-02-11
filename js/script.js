document.addEventListener("DOMContentLoaded", function() {
    // Set the timeout to hide the loading section after 5 seconds
    document.getElementById("passcode").style.display = "none";
    setTimeout(function() {
      document.getElementById("welcome").style.display = "none";
      document.getElementById("passcode").style.display = "block";
    }, 10000); // 5000 milliseconds = 5 seconds
  });

document.addEventListener('DOMContentLoaded', function () {
    // Get the password input
    const passwordInput = document.getElementById('password');
  
    // Add keypress event listener to the password input
    passwordInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        // Check the entered password
        const enteredPassword = passwordInput.value.trim();
  
        // Replace 'your_password_here' with the actual password you want to use
        const correctPassword = '022023';
  
        if (enteredPassword === correctPassword) {
          // Password is correct, redirect to the desired page
          window.location.href = 'uwu.html';
        } else {
          // Password is incorrect, you can display an error message or take other actions
          alert('Incorrect password. Please try again.');
        }
  
        // Prevent the default form submission behavior
        event.preventDefault();
      }
    });
  });
  