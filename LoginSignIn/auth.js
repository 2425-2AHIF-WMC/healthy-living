// JSON Server configuration
const API_BASE_URL = 'http://localhost:3000';

// Session management functions
function saveUserSession(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    sessionStorage.setItem('isLoggedIn', 'true');
}

function loadUserSession() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userData = sessionStorage.getItem('currentUser');

    if (isLoggedIn && userData) {
        return JSON.parse(userData);
    }
    return null;
}

function clearUserSession() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('isLoggedIn');
}

// Set current user and update UI
function setCurrentUser(user) {
    const authButtons = document.getElementById('authButtons');
    const userInfo = document.getElementById('userInfo');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userAvatar = document.getElementById('userAvatar');

    if (authButtons && userInfo) {
        authButtons.style.display = "none";
        userInfo.style.display = "flex";
        userNameDisplay.textContent = user.name;
        userAvatar.textContent = user.name.charAt(0).toUpperCase();
    }
}

function logoutUser() {
    clearUserSession();
    const authButtons = document.getElementById('authButtons');
    const userInfo = document.getElementById('userInfo');

    if (authButtons && userInfo) {
        authButtons.style.display = "flex";
        userInfo.style.display = "none";
    }
}

// Initialize auth state
function initializeAuth() {
    const savedUser = loadUserSession();
    if (savedUser) {
        setCurrentUser(savedUser);
    } else {
        logoutUser();
    }
}


// Add these to auth.js
let currentUser = null;
window.currentUser = null; // Make globally accessible

function setCurrentUser(user) {
    currentUser = user;
    window.currentUser = user; // Update global reference
    saveUserSession(user);

    const authButtons = document.getElementById('authButtons');
    const userInfo = document.getElementById('userInfo');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userAvatar = document.getElementById('userAvatar');
    const welcomeMessage = document.getElementById('welcomeMessage');

    if (authButtons && userInfo) {
        authButtons.style.display = "none";
        userInfo.style.display = "flex";
        userNameDisplay.textContent = user.name;
        userAvatar.textContent = user.name.charAt(0).toUpperCase();
    }

    if (welcomeMessage) {
        welcomeMessage.textContent = `Welcome back, ${user.name}!`;
    }
}

function showNotification(message, type) {
    // Simple notification - you can enhance this later
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2c7873' : '#ef4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 4000;
        font-weight: bold;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}