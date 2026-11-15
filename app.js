const restaurants = [
    {
        id: "caf1",
        name: "CAF 1",
        description: "Your everyday campus food stop.",
        icon: "🍛",
        meals: [
            { id: 1, name: "Jollof Rice & Chicken", category: "Rice", price: 3500, description: "Smoky jollof rice served with chicken.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
            { id: 2, name: "Fried Rice & Chicken", category: "Rice", price: 4000, description: "Fresh fried rice with a side of chicken.", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600" },
            { id: 3, name: "Pounded Yam & Egusi", category: "Swallow", price: 4500, description: "Soft pounded yam with rich egusi soup.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
            { id: 4, name: "Meat Pie", category: "Snacks", price: 1200, description: "Freshly baked pastry with meat filling.", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600" },
            { id: 5, name: "Chilled Soft Drink", category: "Drinks", price: 700, description: "A refreshing chilled drink.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" }
        ]
    },
    {
        id: "captain-cook",
        name: "CAPTAIN COOK",
        description: "Good meals, made to satisfy.",
        icon: "🍗",
        meals: [
            { id: 6, name: "Captain's Jollof", category: "Rice", price: 4000, description: "Special jollof rice with grilled chicken.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
            { id: 7, name: "Spaghetti Special", category: "Rice", price: 3500, description: "Well-seasoned spaghetti with vegetables.", image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=600" },
            { id: 8, name: "Amala & Ewedu", category: "Swallow", price: 4000, description: "Amala served with ewedu and stew.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
            { id: 9, name: "Chicken Pie", category: "Snacks", price: 1500, description: "Golden pastry filled with chicken.", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600" },
            { id: 10, name: "Fruit Juice", category: "Drinks", price: 1800, description: "Refreshing fruit drink.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" }
        ]
    },
    {
        id: "af2",
        name: "AF 2",
        description: "A convenient stop for tasty meals.",
        icon: "🍲",
        meals: [
            { id: 11, name: "White Rice & Stew", category: "Rice", price: 3000, description: "White rice with tasty tomato stew.", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600" },
            { id: 12, name: "Jollof Rice", category: "Rice", price: 3000, description: "Classic Nigerian party-style jollof.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
            { id: 13, name: "Eba & Egusi", category: "Swallow", price: 3500, description: "Eba served with delicious egusi soup.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
            { id: 14, name: "Sausage Roll", category: "Snacks", price: 1000, description: "Fresh sausage roll.", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600" },
            { id: 15, name: "Bottled Water", category: "Drinks", price: 500, description: "Cold bottled water.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" }
        ]
    },
    {
        id: "caf3",
        name: "CAF 3",
        description: "Something delicious for every day.",
        icon: "🍝",
        meals: [
            { id: 16, name: "Fried Rice", category: "Rice", price: 3500, description: "Vegetable fried rice, freshly prepared.", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600" },
            { id: 17, name: "Jollof & Beef", category: "Rice", price: 3800, description: "Jollof rice served with beef.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
            { id: 18, name: "Fufu & Vegetable Soup", category: "Swallow", price: 4500, description: "Soft fufu with vegetable soup.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
            { id: 19, name: "Doughnut", category: "Snacks", price: 800, description: "Soft and freshly made doughnut.", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600" },
            { id: 20, name: "Fresh Juice", category: "Drinks", price: 1500, description: "A refreshing fruit drink.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" }
        ]
    },
    {
        id: "medical-caf",
        name: "MEDICAL CAF",
        description: "Your food stop around the medical area.",
        icon: "🥗",
        meals: [
            { id: 21, name: "Jollof Rice & Fish", category: "Rice", price: 4000, description: "Jollof rice served with fried fish.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
            { id: 22, name: "Beans & Plantain", category: "Rice", price: 3500, description: "Soft beans with fried plantain.", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600" },
            { id: 23, name: "Semovita & Egusi", category: "Swallow", price: 4500, description: "Semovita with rich egusi soup.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
            { id: 24, name: "Chicken Sandwich", category: "Snacks", price: 2500, description: "Sandwich with chicken filling.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600" },
            { id: 25, name: "Yoghurt", category: "Drinks", price: 1500, description: "Cold yoghurt drink.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" }
        ]
    },
    {
        id: "seasons-delly",
        name: "SEASONS DELLY",
        description: "Fresh flavours and satisfying bites.",
        icon: "🍔",
        meals: [
            { id: 26, name: "Special Jollof Rice", category: "Rice", price: 4500, description: "Specially prepared jollof rice.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
            { id: 27, name: "Chicken Pasta", category: "Rice", price: 4500, description: "Creamy pasta served with chicken.", image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=600" },
            { id: 28, name: "Pounded Yam & Soup", category: "Swallow", price: 5000, description: "Pounded yam with a choice of soup.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
            { id: 29, name: "Burger", category: "Snacks", price: 3500, description: "Burger with a delicious filling.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" },
            { id: 30, name: "Smoothie", category: "Drinks", price: 2500, description: "A refreshing fruit smoothie.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600" }
        ]
    }
];

let selectedRestaurant = null;
let selectedCategory = "All";
let cart = [];
let orders = JSON.parse(localStorage.getItem("abuadCafeOrders") || "[]");

const restaurantList = document.getElementById("restaurant-list");
const foodList = document.getElementById("food-list");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");

function formatMoney(amount) {
    return "₦" + amount.toLocaleString("en-NG");
}

function saveOrders() {
    localStorage.setItem("abuadCafeOrders", JSON.stringify(orders));
}

function renderRestaurants() {
    restaurantList.innerHTML = "";

    restaurants.forEach(restaurant => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "restaurant-card";

        if (selectedRestaurant && selectedRestaurant.id === restaurant.id) {
            card.classList.add("selected");
        }

        card.innerHTML = `
            <div class="restaurant-icon">${restaurant.icon}</div>
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>
            <span class="choose-label">VIEW MENU →</span>
        `;

        card.addEventListener("click", () => selectRestaurant(restaurant.id));
        restaurantList.appendChild(card);
    });
}

function selectRestaurant(id) {
    const restaurant = restaurants.find(item => item.id === id);

    if (!restaurant) return;

    if (cart.length > 0 && selectedRestaurant && selectedRestaurant.id !== id) {
        const change = confirm(
            "Changing restaurants will clear your current cart. Continue?"
        );

        if (!change) return;

        cart = [];
        updateCart();
    }

    selectedRestaurant = restaurant;
    selectedCategory = "All";

    document.getElementById("menu-title").textContent =
        restaurant.name + " Menu";

    document.getElementById("menu-subtitle").textContent =
        restaurant.description;

    document.getElementById("search").value = "";

    document.querySelectorAll(".category").forEach(button => {
        button.classList.remove("active");
    });

    document.querySelector(".category").classList.add("active");

    renderRestaurants();
    renderMenu();

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

function filterCategory(category, button) {
    selectedCategory = category;

    document.querySelectorAll(".category").forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");
    renderMenu();
}

function renderMenu() {
    if (!selectedRestaurant) {
        foodList.innerHTML = `
            <div class="empty-state">
                Select a restaurant above to view available meals.
            </div>
        `;
        return;
    }

    const searchText = document.getElementById("search").value.toLowerCase();

    const meals = selectedRestaurant.meals.filter(meal => {
        const matchesCategory =
            selectedCategory === "All" || meal.category === selectedCategory;

        const matchesSearch =
            meal.name.toLowerCase().includes(searchText) ||
            meal.description.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    foodList.innerHTML = "";

    if (meals.length === 0) {
        foodList.innerHTML = `
            <div class="empty-state">No meals found. Try another search.</div>
        `;
        return;
    }

    meals.forEach(meal => {
        const card = document.createElement("article");
        card.className = "food-card";

        card.innerHTML = `
            <img src="${meal.image}" alt="${meal.name}" loading="lazy">
            <div class="food-info">
                <h3>${meal.name}</h3>
                <p>${meal.description}</p>
                <div class="food-bottom">
                    <span class="food-price">${formatMoney(meal.price)}</span>
                    <button class="add-button" type="button">Add to cart +</button>
                </div>
            </div>
        `;

        card.querySelector(".add-button").addEventListener("click", () => {
            addToCart(meal);
        });

        foodList.appendChild(card);
    });
}

function addToCart(meal) {
    if (!selectedRestaurant) return;

    const existingItem = cart.find(item => item.id === meal.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...meal,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    cartCount.textContent = totalQuantity;
    document.getElementById("subtotal").textContent = formatMoney(totalPrice);
    document.getElementById("cart-restaurant").textContent =
        selectedRestaurant ? selectedRestaurant.name : "No restaurant selected";

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <p class="empty-state">Your cart is empty.</p>
        `;
        return;
    }

    cartItems.innerHTML = "";

    cart.forEach(item => {
        const row = document.createElement("div");
        row.className = "cart-item";

        row.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>${formatMoney(item.price * item.quantity)}</p>
            </div>
            <div class="quantity-controls">
                <button type="button" class="decrease">−</button>
                <span>${item.quantity}</span>
                <button type="button" class="increase">+</button>
            </div>
        `;

        row.querySelector(".decrease").addEventListener("click", () => {
            changeQuantity(item.id, -1);
        });

        row.querySelector(".increase").addEventListener("click", () => {
            changeQuantity(item.id, 1);
        });

        cartItems.appendChild(row);
    });
}

function changeQuantity(id, amount) {
    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }

    updateCart();
}

function toggleCart() {
    cartDrawer.classList.toggle("open");
    cartOverlay.classList.toggle("show");
}

function openCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add a meal first.");
        return;
    }

    document.getElementById("checkout-total").textContent =
        formatMoney(getCartTotal());

    toggleCart();
    document.getElementById("checkout-modal").classList.add("show");
}

function closeCheckout() {
    document.getElementById("checkout-modal").classList.remove("show");
}

function getCartTotal() {
    return cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
}

document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();

    if (!selectedRestaurant || cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const customerName = document.getElementById("customer-name").value.trim();
    const customerPhone = document.getElementById("customer-phone").value.trim();
    const customerLocation = document.getElementById("customer-location").value.trim();
    const customerNote = document.getElementById("customer-note").value.trim();

    if (!customerName || !customerPhone || !customerLocation) {
        alert("Please complete all required fields.");
        return;
    }

    const order = {
        id: "ABC-" + Date.now().toString().slice(-8),
        restaurant: selectedRestaurant.name,
        customer: customerName,
        phone: customerPhone,
        location: customerLocation,
        note: customerNote,
        items: cart.map(item => ({ ...item })),
        total: getCartTotal(),
        status: "Order received",
        date: new Date().toLocaleString()
    };

    orders.push(order);
    saveOrders();

    closeCheckout();

    document.getElementById("order-number").textContent = order.id;
    document.getElementById("success-modal").classList.add("show");

    cart = [];
    updateCart();
    this.reset();
});

function closeSuccess() {
    document.getElementById("success-modal").classList.remove("show");
}

document.getElementById("year").textContent = new Date().getFullYear();

renderRestaurants();
renderMenu();
updateCart();