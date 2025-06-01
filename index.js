
// JSON Server configuration
const API_BASE_URL = 'http://localhost:3000'; // Change this to your JSON server URL

// DOM Elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const modalContent = document.getElementById('modalContent');
const authModal = document.getElementById('authModal');
const welcomeMessage = document.getElementById('welcomeMessage');
const logoutButton = document.getElementById('logoutButton');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginError = document.getElementById('loginError');
const signupError = document.getElementById('signupError');
const myAccountBtn = document.getElementById('myAccountBtn');
const closeModal = document.getElementById('closeModal');
const authButtons = document.getElementById('authButtons');
const userInfo = document.getElementById('userInfo');
const userNameDisplay = document.getElementById('userNameDisplay');
const userAvatar = document.getElementById('userAvatar');
const notification = document.getElementById('notification');

// Current user state
let currentUser = null;


// Toggle between sign-in and sign-up forms
signUpButton.addEventListener('click', () => {
    modalContent.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    modalContent.classList.remove("right-panel-active");
});

// Open modal
myAccountBtn.addEventListener('click', () => {
    authModal.style.display = "block";
    modalContent.classList.remove("right-panel-active");
});

// Close modal
function closeModalFunction() {
    authModal.style.display = "none";
    loginError.classList.remove("show");
    signupError.classList.remove("show");
}

closeModal.addEventListener('click', closeModalFunction);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        closeModalFunction();
    }
});

// API Functions
async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/users?email=${email}&password=${password}`);
        const users = await response.json();

        if (users.length > 0) {
            return users[0];
        }
        return null;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

async function registerUser(userData) {
    try {
        // Check if email already exists
        const existingResponse = await fetch(`${API_BASE_URL}/users?email=${userData.email}`);
        const existingUsers = await existingResponse.json();

        if (existingUsers.length > 0) {
            throw new Error('Email already exists');
        }

        // Create new user
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...userData,
                id: Date.now() // Simple ID generation
            })
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

// Handle login
loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const user = await loginUser(email, password);

        if (user) {
            // Login successful
            setCurrentUser(user);
            authModal.style.display = "none";
            showNotification('Login successful!', 'success');
        } else {
            // Login failed
            loginError.textContent = "Invalid email or password";
            loginError.classList.add("show");
        }
    } catch (error) {
        loginError.textContent = "Login failed. Please try again.";
        loginError.classList.add("show");
    }
});

// Handle signup
signupForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        const newUser = await registerUser({name, email, password});

        // Login the new user
        setCurrentUser(newUser);
        authModal.style.display = "none";
        showNotification('Account created successfully!', 'success');

    } catch (error) {
        signupError.textContent = error.message;
        signupError.classList.add("show");
    }
});

// Set current user and update UI
function setCurrentUser(user) {
    currentUser = user;
    welcomeMessage.textContent = `Welcome to our site, ${user.name}!`;

    // Update UI to show logged in state
    authButtons.style.display = "none";
    userInfo.style.display = "flex";
    userNameDisplay.textContent = user.name;
    userAvatar.textContent = user.name.charAt(0).toUpperCase();

    // Clear form fields
    loginForm.reset();
    signupForm.reset();
    loginError.classList.remove("show");
    signupError.classList.remove("show");
}

// Handle logout
logoutButton.addEventListener('click', function(e) {
    e.preventDefault();

    currentUser = null;
    welcomeMessage.textContent = "";

    // Update UI to show logged out state
    authButtons.style.display = "flex";
    userInfo.style.display = "none";

    showNotification('Logged out successfully!', 'success');
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Check if user was previously logged in (you might want to implement session persistence)
    console.log('App initialized. Ready to connect to JSON server at:', API_BASE_URL);
});
