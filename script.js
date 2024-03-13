// Get the user selection buttons
const studentBtn = document.getElementById('studentBtn');
const teacherBtn = document.getElementById('teacherBtn');

// Get the login box and heading
const loginBox = document.querySelector('.login-box');
const loginHeading = document.getElementById('loginHeading');

// Get the signup box
const signupBox = document.querySelector('.signup-box');

// Get the signup link
const signupLink = document.getElementById('signupLink');

// Add event listeners for user selection buttons
studentBtn.addEventListener('click', () => {
  showLoginForm('Student');
});

teacherBtn.addEventListener('click', () => {
  showLoginForm('Teacher');
});

// Function to show the login form
function showLoginForm(userType) {
  loginBox.classList.remove('hidden');
  loginHeading.textContent = `Login as ${userType}`;

  // Add event listener for signup link
  signupLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginBox.classList.add('hidden');
    signupBox.classList.remove('hidden');
  });

  // Implement your login logic here
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Perform login logic for the specified user type
    console.log(`Logging in as ${userType} with username: ${username} and password: ${password}`);
  });
}

// Implement your signup logic here
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('signupName').value;
  const village = document.getElementById('signupVillage').value;
  const age = document.getElementById('signupAge').value;
  const address = document.getElementById('signupAddress').value;
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  // Perform signup logic
  console.log(`Signing up with name: ${name}, village: ${village}, age: ${age}, address: ${address}, username: ${username}, email: ${email}, and password: ${password}`);
});