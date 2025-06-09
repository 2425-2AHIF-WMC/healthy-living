document.addEventListener('DOMContentLoaded', () => {
    initializeAuth(); // This function is now from auth.js

    // Add logout functionality
    const logoutBtn = document.getElementById('logoutButton');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logoutUser();
            alert('Logged out successfully!');
        });
    }

    // Authentication Modal Elements moved inside DOMContentLoaded
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const modalContent = document.getElementById('modalContentLogin');
    const authModal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginError = document.getElementById('loginError');
    const signupError = document.getElementById('signupError');
    const myAccountBtn = document.getElementById('myAccountBtn');
    const closeModal = document.getElementById('closeModal');

    // JSON Server configuration
    const API_BASE_URL = 'http://localhost:3000';

    // Toggle between sign-in and sign-up forms
    if (signUpButton) {
        signUpButton.addEventListener('click', () => {
            modalContent.classList.add("right-panel-active");
        });
    }

    if (signInButton) {
        signInButton.addEventListener('click', () => {
            modalContent.classList.remove("right-panel-active");
        });
    }

    // Open modal when "My Account" button is clicked
    if (myAccountBtn) {
        myAccountBtn.addEventListener('click', () => {
            authModal.style.display = "block";
            modalContent.classList.remove("right-panel-active");
        });
    }

    // Close modal
    function closeModalFunction() {
        authModal.style.display = "none";
        if (loginError) loginError.classList.remove("show");
        if (signupError) signupError.classList.remove("show");
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }

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
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            try {
                const user = await loginUser(email, password);
                if (user) {
                    // Login successful - use the functions from auth.js
                    saveUserSession(user);
                    setCurrentUser(user);
                    authModal.style.display = "none";
                    alert('Login successful!');
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
    }

    // Handle signup
    if (signupForm) {
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            try {
                const newUser = await registerUser({name, email, password});
                // Login the new user
                saveUserSession(newUser);
                setCurrentUser(newUser);
                authModal.style.display = "none";
                alert('Account created successfully!');
            } catch (error) {
                signupError.textContent = error.message;
                signupError.classList.add("show");
            }
        });
    }

});

// Shopping Cart Functionality
class ShoppingCart {
    constructor() {
        this.items = [];
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createCartButton();
        this.createCartModal();
        this.updateCartDisplay();
    }

    createCartButton() {
        // Create cart button
        const cartButton = document.createElement('button');
        cartButton.className = 'cart-button';
        cartButton.innerHTML = `
            <div class="cart-icon">
                <div class="cart-icon-inner"></div>
            </div>
            🛒 Cart (<span id="cart-count">0</span>)
        `;
        cartButton.onclick = () => this.toggleCart();
        document.body.appendChild(cartButton);
    }

    createCartModal() {
        // Create cart modal
        const cartModal = document.createElement('div');
        cartModal.id = 'cartModal';
        cartModal.className = 'cart-modal';
        cartModal.innerHTML = `
            <div class="cart-modal-content">
                <div class="cart-header">
                    <h2>Your Shopping Cart</h2>
                    <span class="cart-close">&times;</span>
                </div>
                <div class="cart-items" id="cartItems">
                    <!-- Cart items will be inserted here -->
                </div>
                <div class="cart-footer">
                    <div class="cart-total">
                        <strong>Total: €<span id="cartTotal">0.00</span></strong>
                    </div>
                    <div class="cart-actions">
                        <button class="clear-cart-btn" onclick="cart.clearCart()">Clear Cart</button>
                        <button class="checkout-btn" onclick="cart.checkout()">Checkout</button>
                    </div>
                </div>
            </div>
        `;

        // Add styles for cart modal
        const style = document.createElement('style');
        style.textContent = `
            .cart-modal {
                display: none;
                position: fixed;
                z-index: 3000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                backdrop-filter: blur(5px);
            }

            .cart-modal-content {
                background: #fff;
                margin: 5% auto;
                padding: 0;
                border-radius: 20px;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                overflow: hidden;
                box-shadow: 0 14px 28px rgba(0,0,0,0.25);
                display: flex;
                flex-direction: column;
            }

            .cart-header {
                background: linear-gradient(45deg, #2c7873, #1a5653);
                color: white;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .cart-header h2 {
                margin: 0;
                font-family: 'Montserrat', sans-serif;
            }

            .cart-close {
                font-size: 30px;
                cursor: pointer;
                transition: color 0.3s;
            }

            .cart-close:hover {
                color: #e9dab5;
            }

            .cart-items {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                max-height: 400px;
            }

            .cart-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px;
                border-bottom: 1px solid #ecf0f1;
                margin-bottom: 10px;
                border-radius: 10px;
                background: rgba(233, 218, 181, 0.1);
            }

            .cart-item:last-child {
                border-bottom: none;
            }

            .cart-item-info {
                flex: 1;
            }

            .cart-item-name {
                font-weight: bold;
                color: #1a5653;
                margin-bottom: 5px;
            }

            .cart-item-price {
                color: #2c7873;
                font-weight: 600;
            }

            .cart-item-controls {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .quantity-btn {
                background: #2c7873;
                color: white;
                border: none;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                font-weight: bold;
                transition: background 0.3s;
            }

            .quantity-btn:hover {
                background: #1a5653;
            }

            .quantity-display {
                min-width: 30px;
                text-align: center;
                font-weight: bold;
                color: #1a5653;
            }

            .remove-btn {
                background: #ef4444;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 15px;
                cursor: pointer;
                font-size: 12px;
                transition: background 0.3s;
            }

            .remove-btn:hover {
                background: #dc2626;
            }

            .cart-footer {
                background: rgba(233, 218, 181, 0.2);
                padding: 20px;
                border-top: 1px solid #ecf0f1;
            }

            .cart-total {
                text-align: center;
                font-size: 1.3rem;
                color: #1a5653;
                margin-bottom: 15px;
            }

            .cart-actions {
                display: flex;
                gap: 10px;
                justify-content: center;
            }

            .clear-cart-btn, .checkout-btn {
                padding: 12px 24px;
                border: none;
                border-radius: 25px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s;
                font-family: 'Montserrat', sans-serif;
            }

            .clear-cart-btn {
                background: #6c757d;
                color: white;
            }

            .clear-cart-btn:hover {
                background: #5a6268;
            }

            .checkout-btn {
                background: #2c7873;
                color: white;
            }

            .checkout-btn:hover {
                background: #1a5653;
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(44, 120, 115, 0.4);
            }

            .empty-cart {
                text-align: center;
                padding: 40px;
                color: #7f8c8d;
            }

            .empty-cart-icon {
                font-size: 4rem;
                margin-bottom: 20px;
            }

            @media (max-width: 768px) {
                .cart-modal-content {
                    width: 95%;
                    margin: 2% auto;
                }
                
                .cart-actions {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(cartModal);

        // Add event listeners
        cartModal.querySelector('.cart-close').onclick = () => this.toggleCart();
        cartModal.onclick = (e) => {
            if (e.target === cartModal) this.toggleCart();
        };
    }

    addToCart(productName, price) {
        const existingItem = this.items.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                name: productName,
                price: price,
                quantity: 1
            });
        }

        this.updateCartDisplay();
        this.showAddedToCartMessage(productName);
    }

    removeFromCart(productName) {
        this.items = this.items.filter(item => item.name !== productName);
        this.updateCartDisplay();
    }

    updateQuantity(productName, newQuantity) {
        const item = this.items.find(item => item.name === productName);
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(productName);
            } else {
                item.quantity = newQuantity;
                this.updateCartDisplay();
            }
        }
    }

    clearCart() {
        if (this.items.length === 0) return;

        if (confirm('Are you sure you want to clear your cart?')) {
            this.items = [];
            this.updateCartDisplay();
        }
    }

    calculateTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    updateCartDisplay() {
        // Update cart count
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Update cart items
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Add some healthy products to get started!</p>
                </div>
            `;
        } else {
            cartItemsContainer.innerHTML = this.items.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">€${item.price.toFixed(2)} each</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.name}', ${item.quantity - 1})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.name}', ${item.quantity + 1})">+</button>
                        <button class="remove-btn" onclick="cart.removeFromCart('${item.name}')">Remove</button>
                    </div>
                </div>
            `).join('');
        }

        if (cartTotal) {
            cartTotal.textContent = this.calculateTotal().toFixed(2);
        }
    }

    toggleCart() {
        const cartModal = document.getElementById('cartModal');
        if (cartModal) {
            this.isOpen = !this.isOpen;
            cartModal.style.display = this.isOpen ? 'block' : 'none';
        }
    }

    showAddedToCartMessage(productName) {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2c7873;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            z-index: 4000;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(44, 120, 115, 0.3);
            animation: slideInRight 0.3s ease;
        `;
        notification.innerHTML = `✓ ${productName} added to cart!`;

        // Add animation keyframes
        if (!document.querySelector('#cart-animations')) {
            const animationStyle = document.createElement('style');
            animationStyle.id = 'cart-animations';
            animationStyle.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(animationStyle);
        }

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const total = this.calculateTotal();
        const itemCount = this.items.reduce((sum, item) => sum + item.quantity, 0);

        const confirmMessage = `
            Checkout Summary:
            Items: ${itemCount}
            Total: €${total.toFixed(2)}
            
            Proceed to checkout?
        `;

        if (confirm(confirmMessage)) {
            alert('Thank you for your order! 🎉\n\nThis is a demo, so no actual payment will be processed.');
            this.items = [];
            this.updateCartDisplay();
            this.toggleCart();
        }
    }
}

// Authentication Functions (placeholder - you'll need to implement these based on your auth.js)
function initializeAuth() {
    // Initialize authentication system
    console.log('Authentication initialized');
}

function saveUserSession(user) {
    // Save user session data
    const userData = JSON.stringify(user);
    // Using in-memory storage for demo purposes
    window.currentUserSession = userData;
}

function setCurrentUser(user) {
    // Set current user
    window.currentUser = user;
    console.log('Current user set:', user);
}

function logoutUser() {
    // Clear user session
    window.currentUserSession = null;
    window.currentUser = null;
}

// Initialize cart and authentication when page loads
let cart;


// Global function for add to cart buttons
function addToCart(productName, price) {
    if (cart) {
        cart.addToCart(productName, price);
    }
}