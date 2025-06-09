
    // Category filtering functionality
    function filterCategory(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categories = document.querySelectorAll('.exercise-category');

    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Show/hide categories
    categories.forEach(cat => {
    if (category === 'all' || cat.dataset.category === category) {
    cat.style.display = 'block';
} else {
    cat.style.display = 'none';
}
});
}

    // Authentication handling
    document.addEventListener('DOMContentLoaded', function() {
    const authButtons = document.getElementById('authButtons');
    const userInfo = document.getElementById('userInfo');
    const userAvatar = document.getElementById('userAvatar');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const myAccountBtn = document.getElementById('myAccountBtn');
    const logoutButton = document.getElementById('logoutButton');

    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
    const userData = JSON.parse(currentUser);
    showUserInfo(userData);
} else {
    showAuthButtons();
}

    function showUserInfo(userData) {
    authButtons.style.display = 'none';
    userInfo.style.display = 'flex';
    userAvatar.textContent = userData.name.charAt(0).toUpperCase();
    userNameDisplay.textContent = userData.name;
}

    function showAuthButtons() {
    authButtons.style.display = 'flex';
    userInfo.style.display = 'none';
}

    // My Account button click
    myAccountBtn.addEventListener('click', function() {
    window.location.href = 'myAccount.html';
});

    // Logout button click
    logoutButton.addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    showAuthButtons();
});
});

    // Initialize 3D animations (placeholder - would need actual Three.js implementation)
    function initializeAnimations() {
    const canvases = document.querySelectorAll('canvas[id^="c-"]');
    canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#2c7873';
    ctx.font = '14px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('3D Animation Loading...', canvas.width/2, canvas.height/2);
});
}

    // Initialize when page loads
    document.addEventListener('DOMContentLoaded', initializeAnimations);
