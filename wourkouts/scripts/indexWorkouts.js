// Current user state - using in-memory storage instead of localStorage
let currentUser = null;
let users = [
    { id: 1, name: "Demo User", email: "demo@example.com", password: "password" }
];

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
const authButtons = document.getElementById('authButtons');
const userInfo = document.getElementById('userInfo');
const userNameDisplay = document.getElementById('userNameDisplay');
const userAvatar = document.getElementById('userAvatar');
const userDropdown = document.getElementById('userDropdown');
const closeModal = document.getElementById('closeModal');
const notification = document.getElementById('notification');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    checkAuthState();
    initializeEventListeners();
    addClickEffects();
});

// Check authentication state
function checkAuthState() {
    if (currentUser) {
        showUserInterface();
    } else {
        showAuthButtons();
    }
}

// Show user interface when logged in
function showUserInterface() {
    authButtons.style.display = 'none';
    userInfo.style.display = 'flex';
    userNameDisplay.textContent = currentUser.name;
    userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
    welcomeMessage.textContent = `Welcome back, ${currentUser.name}!`;
    welcomeMessage.style.display = 'block';
}

// Show auth buttons when logged out
function showAuthButtons() {
    authButtons.style.display = 'flex';
    userInfo.style.display = 'none';
    welcomeMessage.style.display = 'none';
}

// Initialize event listeners
function initializeEventListeners() {
    // Modal controls
    signUpButton.addEventListener('click', () => {
        modalContent.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        modalContent.classList.remove("right-panel-active");
    });

    myAccountBtn.addEventListener('click', () => {
        authModal.style.display = 'block';
        modalContent.classList.remove("right-panel-active");
    });

    closeModal.addEventListener('click', () => {
        authModal.style.display = 'none';
        clearErrors();
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
            clearErrors();
        }
    });

    // User dropdown toggle
    userAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        userDropdown.style.display = 'none';
    });

    // Form submissions
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);
    logoutButton.addEventListener('click', handleLogout);
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        authModal.style.display = 'none';
        showUserInterface();
        showNotification('Login successful!', 'success');
        clearErrors();
        loginForm.reset();
    } else {
        showError('loginError', 'Invalid email or password');
    }
}

// Handle signup
function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if user already exists
    if (users.find(u => u.email === email)) {
        showError('signupError', 'Email already registered');
        return;
    }

    // Validate password
    if (password.length < 6) {
        showError('signupError', 'Password must be at least 6 characters');
        return;
    }

    // Create new user
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);
    currentUser = newUser;

    authModal.style.display = 'none';
    showUserInterface();
    showNotification('Account created successfully!', 'success');
    clearErrors();
    signupForm.reset();
}

// Handle logout
function handleLogout() {
    currentUser = null;
    showAuthButtons();
    userDropdown.style.display = 'none';
    showNotification('Logged out successfully!', 'success');
}

// Show error message
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Clear all error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });
}

// Show notification
function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Add click effects to cards
function addClickEffects() {
    const cards = document.querySelectorAll('.click-effect');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 600);
        });
    });
}

// Navigation functions
function navigateToSection(section) {
    switch(section) {
        case 'custom':
            showNotification('Custom workout builder coming soon!', 'success');
            break;
        case 'premade':
            showNotification('Pre-made workouts coming soon!', 'success');
            break;
        case 'exercises':
            showNotification('Exercise library coming soon!', 'success');
            break;
        default:
            showNotification('Feature coming soon!', 'success');
    }
}

// Smooth animations for loading elements
window.addEventListener('load', () => {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add some interactive features
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;

        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape' && authModal.style.display === 'block') {
        authModal.style.display = 'none';
        clearErrors();
    }

    // Alt + L for quick login (demo)
    if (e.altKey && e.key === 'l') {
        e.preventDefault();
        if (!currentUser) {
            document.getElementById('loginEmail').value = 'demo@example.com';
            document.getElementById('loginPassword').value = 'password';
            authModal.style.display = 'block';
            modalContent.classList.remove("right-panel-active");
        }
    }
});