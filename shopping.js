 // Sample product data with image URLs (currently placeholders)
    const products = [
    {
        id: 1,
        name: "Premium Yoga Mat",
        brand: "ZenFlex",
        store: "YogaEssentials.com",
        purpose: "Yoga & Meditation",
        price: 49.99,
        imageUrl: "yogaMatte.jpg" // Add your image URL here
    },
    {
        id: 2,
        name: "Organic Protein Powder",
        brand: "PureNutrition",
        store: "OrganicWellness.com",
        purpose: "Nutrition & Recovery",
        price: 39.95,
        imageUrl: "" // Add your image URL here
    },
    {
        id: 3,
        name: "Meditation Cushion Set",
        brand: "MindfulSpace",
        store: "ZenLiving.com",
        purpose: "Meditation & Relaxation",
        price: 59.99,
        imageUrl: "" // Add your image URL here
    },
    {
        id: 4,
        name: "Smart Water Bottle",
        brand: "HydroTech",
        store: "FitnessGear.com",
        purpose: "Hydration & Tracking",
        price: 34.50,
        imageUrl: "" // Add your image URL here
    },
    {
        id: 5,
        name: "Fitness Resistance Bands",
        brand: "FlexStrength",
        store: "HomeGym.com",
        purpose: "Strength Training",
        price: 24.99,
        imageUrl: "" // Add your image URL here
    },
    {
        id: 6,
        name: "Herbal Sleep Aid",
        brand: "NaturalRest",
        store: "HolisticHealth.com",
        purpose: "Sleep & Relaxation",
        price: 19.95,
        imageUrl: "" // Add your image URL here
    }
    ];

    // Shopping cart
    let cart = [];

    // DOM elements
    const productGrid = document.getElementById('product-grid');
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    const continueShoppingBtn = document.getElementById('continue-shopping');

    // Display products
    function displayProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    // Create image element
    const imageHtml = product.imageUrl
    ? `<div class="product-image" style="background-image: url('${product.imageUrl}');"></div>`
    : `<div class="product-image"> Product Image</div>`;

    productCard.innerHTML = `
                <div class="product-content">
                    ${imageHtml}
                    <div class="store-badge">
                        ${product.store}
                    </div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-purpose">${product.purpose}</p>
                    <div class="product-footer">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        <button class="btn-add" data-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
    productGrid.appendChild(productCard);
});

    // Add event listeners to "Add to Cart" buttons after they're created
    document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', addToCart);
});
}

    // Add product to cart
    function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);

    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
    existingItem.quantity += 1;
} else {
    cart.push({
    ...product,
    quantity: 1
});
}
    updateCart();

    // Show visual feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = "Added!";
    button.classList.add('added');
    setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove('added');
}, 1000);
}

    // Decrease item quantity
    function decreaseQuantity(event) {
    const productId = parseInt(event.target.closest('button').getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);

    if (item.quantity > 1) {
    item.quantity -= 1;
} else {
    cart = cart.filter(item => item.id !== productId);
}

    updateCart();
}

    // Increase item quantity
    function increaseQuantity(event) {
    const productId = parseInt(event.target.closest('button').getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    item.quantity += 1;
    updateCart();
}

    // Remove item from cart
    function removeItem(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

    // Toggle cart modal
    function toggleCartModal() {
    cartModal.classList.toggle('hidden');
}

    // Update cart display
    function updateCart() {
    // Update cart count
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    // Update cart items
    cartItems.innerHTML = '';

    if (cart.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'empty-message';
    emptyMessage.textContent = 'Your cart is empty. Add some wellness products!';
    cartItems.appendChild(emptyMessage);

} else {


    cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    // Create cart item image
    const cartImageHtml = item.imageUrl
    ? `<div class="cart-item-image" style="background-image: url('${item.imageUrl}');"></div>`
    : `<div class="cart-item-image">📷</div>`;

    cartItem.innerHTML = `
                    <div class="cart-item-info">
                        ${cartImageHtml}
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <p>${item.brand} • ${item.store}</p>
                        </div>
                    </div>
                    <div class="quantity-controls">
                        <button
                        style="padding: 4px 8px; font-size: 12px; width: 60px; height: 30px;"
                        class="qty-btn decrease-qty" data-id="${item.id}">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button
                          style="padding: 4px 8px; font-size: 12px; width: 60px; height: 30px;"
                        class="qty-btn increase-qty" data-id="${item.id}">+</button>
                    </div>
                    <div class="cart-item-price">
                        <div class="price">$${(item.price * item.quantity).toFixed(2)}</div>
                        <button
                        class="remove-btn" data-id="${item.id}">Remove</button>
                    </div>
                `;
    cartItems.appendChild(cartItem);
});
}

    // Add event listeners to cart item buttons
    document.querySelectorAll('.decrease-qty').forEach(button => {
    button.addEventListener('click', decreaseQuantity);
});

    document.querySelectorAll('.increase-qty').forEach(button => {
    button.addEventListener('click', increaseQuantity);
});

    document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', removeItem);
});

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

    // Event listeners
    cartButton.addEventListener('click', toggleCartModal);
    closeCart.addEventListener('click', toggleCartModal);
    continueShoppingBtn.addEventListener('click', toggleCartModal);


    // Close modal when clicking outside
    cartModal.addEventListener('click', (event) => {
    if (event.target === cartModal) {
    toggleCartModal();
}
});

    // Initialize the page
    displayProducts();
