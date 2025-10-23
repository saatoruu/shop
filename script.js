Coba AI secara langsung di aplikasi favorit Anda … Gunakan Gemini untuk membuat draf dan menyempurnakan konten, serta dapatkan Gemini Pro dengan akses ke AI generasi berikutnya dari Google seharga Rp 309.000 Rp 0 selama 1 bulan
let products = [
    { id: 1, name: "Processor Intel i9", price: 5500000, category: "hardware", image: "intel-core-i9-12900k-52-ghz-16c24t-lga-1700-al.jpg" },
    { id: 2, name: "Motherboard ASUS", price: 3200000, category: "hardware", image: "ROG-Strix-B760-F-Gaming.png" },
    { id: 3, name: "RAM 32GB DDR4", price: 1800000, category: "hardware", image: "images (1) (1).jpg" },
    { id: 4, name: "SSD NVMe 1TB", price: 1500000, category: "hardware", image: "SSD-m.2-NVMe-1TB-AGi-2280-Gen-4-2.png" },
    { id: 5, name: "GPU RTX 4080", price: 18500000, category: "hardware", image: "images (1) (2).jpg" },
    { id: 6, name: "PSU 850W Gold", price: 2200000, category: "hardware", image: "images (1) (3).jpg" },
    { id: 7, name: "Cooler Master Case", price: 1200000, category: "hardware", image: "images (1) (14).jpg" },
    { id: 8, name: "Monitor 27\" 4K", price: 4500000, category: "hardware", image: "msi-modern-md271ul-kv-mobile.jpg" },
    { id: 9, name: "Router Wi-Fi 6", price: 1500000, category: "network", image: "images (1) (7).jpg" },
    { id: 10, name: "Switch 8 Port", price: 800000, category: "network", image: "images (1) (6).jpg" },
    { id: 11, name: "Access Point", price: 1200000, category: "network", image: "images (1) (5).jpg" },
    { id: 12, name: "Network Cable 10m", price: 150000, category: "network", image: "images (1) (8).jpg" },
    { id: 13, name: "Mechanical Keyboard", price: 1200000, category: "accessories", image: "images (1) (9).jpg" },
    { id: 14, name: "Gaming Mouse", price: 800000, category: "accessories", image: "fantech_x9_macro_gaming_mouse_full04_nlqx68s8.jpg" },
    { id: 15, name: "Webcam 1080p", price: 900000, category: "accessories", image: "images (1) (10).jpg" },
    { id: 16, name: "Headset Gaming", price: 1500000, category: "accessories", image: "images (1) (11).jpg" },
    { id: 17, name: "Mouse Pad XL", price: 250000, category: "accessories", image: "images (1) (12).jpg" },
    { id: 18, name: "Laptop Stand", price: 400000, category: "accessories", image: "images (1) (13).jpg" },
    { id: 19, name: "External HDD 2TB", price: 1200000, category: "accessories", image: "402d15df-f619-4ca6-bf91-3b8649857dfd.jpg" },
    { id: 20, name: "USB-C Hub", price: 500000, category: "accessories", image: "1-39.jpg" },
    { id: 21, name: "CPU Cooler", price: 800000, category: "hardware", image: "images (1) (14).jpg" },
    { id: 22, name: "Thermal Paste", price: 150000, category: "hardware", image: "images (1) (15).jpg" },
    { id: 23, name: "Ethernet Adapter", price: 300000, category: "network", image: "images (1) (16).jpg" },
    { id: 24, name: "Network Card", price: 600000, category: "network", image: "Network_card.jpg" },
    { id: 25, name: "Cable Manager", price: 100000, category: "accessories", image: "images (1) (17).jpg" }
];

let users = [
    { id: 1, name: "John Doe", email: "john@example.com", password: "password123", phone: "+62 812-3456-7890", joinDate: "Januari 2023" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", password: "password123", phone: "+62 813-4567-8901", joinDate: "Februari 2023" }
];

const admins = [
    { username: "fatkul.dev", password: "dev123", name: "Fatkul Developer" },
    { username: "weza.dev", password: "dev456", name: "Weza Developer" }
];

let currentUser = null;
let currentAdmin = null;
let cart = [];
let soldProducts = [];
let totalRevenue = 0;
let recentActivities = [];

const userLoginModal = document.getElementById('userLoginModal');
const userRegisterModal = document.getElementById('userRegisterModal');
const userLoginBtn = document.getElementById('userLoginBtn');
const heroLoginBtn = document.getElementById('heroLoginBtn');
const adminAccessBtn = document.getElementById('adminAccess');
const userInfo = document.getElementById('user-info');
const userGreeting = document.getElementById('user-greeting');
const userLogoutBtn = document.getElementById('user-logout');
const logoutAdminBtn = document.getElementById('logoutAdmin');
const loginToShopBtn = document.getElementById('loginToShop');

const loginTabs = document.querySelectorAll('.login-tab');
const loginContents = document.querySelectorAll('.login-content');

const customerLoginForm = document.getElementById('customerLoginForm');
const adminLoginForm = document.getElementById('adminLoginForm');
const registerForm = document.getElementById('registerForm');

const customerGoogleLogin = document.getElementById('customerGoogleLogin');
const adminGoogleLogin = document.getElementById('adminGoogleLogin');

const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

const closeUserLogin = document.querySelector('.close-user-login');
const closeRegister = document.querySelector('.close-register');

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const categoryBtns = document.querySelectorAll('.category-btn');
const productsGrid = document.getElementById('products-grid');
const recommendedProducts = document.getElementById('recommended-products');
const devPanel = document.getElementById('devPanel');
const closeDevPanelBtn = document.getElementById('closeDevPanel');
const productSelect = document.getElementById('productSelect');
const updatePriceBtn = document.getElementById('updatePrice');
const newPriceInput = document.getElementById('newPrice');
const addProductForm = document.getElementById('addProductForm');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const quotesSlider = document.querySelector('.quotes-slider');
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.getElementById('cartBtn');
const editProfileBtn = document.getElementById('edit-profile');
const messageForm = document.getElementById('messageForm');
const paymentModal = document.getElementById('paymentModal');
const paymentForm = document.getElementById('paymentForm');
const closePaymentBtn = document.querySelector('.close-payment');
const header = document.querySelector('header');
const parallaxLayers = document.querySelectorAll('.parallax-layer');

const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.querySelector('.close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');
const cartSummary = document.getElementById('cart-summary');
const cartTotalAmount = document.getElementById('cart-total-amount');
const checkoutBtn = document.getElementById('checkout-btn');

document.addEventListener('DOMContentLoaded', function() {
    setupLoginSystem();
    setupCartEventListeners();
    updateCartDisplay();
    displayProducts(products, productsGrid);
    displayProducts(products.slice(0, 5), recommendedProducts);
    updateUserProfile();
    startQuotesSlider();
    setupEventListeners();
    setupDeveloperPanel();
    updateDashboard();
    setupScrollAnimations();
    initializeChart();
    setupParallax();
    setupCategoryFilter();
    checkExistingLogin();
});

function setupLoginSystem() {
    loginTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            loginTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            loginContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabName}-login`) content.classList.add('active');
            });
        });
    });

    if (customerLoginForm) {
        customerLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('customerEmail').value;
            const password = document.getElementById('customerPassword').value;
            loginCustomer(email, password);
        });
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('adminUsername').value;
            const password = document.getElementById('adminPassword').value;
            loginAdmin(username, password);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            registerCustomer();
        });
    }

    if (customerGoogleLogin) customerGoogleLogin.addEventListener('click', function() { simulateGoogleLogin('customer'); });
    if (adminGoogleLogin) adminGoogleLogin.addEventListener('click', function() { simulateGoogleLogin('admin'); });

    if (showRegister) showRegister.addEventListener('click', function(e) { e.preventDefault(); userLoginModal.classList.remove('active'); userRegisterModal.classList.add('active'); });
    if (showLogin) showLogin.addEventListener('click', function(e) { e.preventDefault(); userRegisterModal.classList.remove('active'); userLoginModal.classList.add('active'); });

    if (userLoginBtn) userLoginBtn.addEventListener('click', function() { userLoginModal.classList.add('active'); });
    if (heroLoginBtn) heroLoginBtn.addEventListener('click', function() { userLoginModal.classList.add('active'); });
    if (loginToShopBtn) loginToShopBtn.addEventListener('click', function() { userLoginModal.classList.add('active'); });

    if (adminAccessBtn) adminAccessBtn.addEventListener('click', function() { devPanel.classList.add('active'); });

    if (userLogoutBtn) userLogoutBtn.addEventListener('click', logoutCustomer);
    if (logoutAdminBtn) logoutAdminBtn.addEventListener('click', logoutAdmin);

    if (closeUserLogin) closeUserLogin.addEventListener('click', function() { userLoginModal.classList.remove('active'); });
    if (closeRegister) closeRegister.addEventListener('click', function() { userRegisterModal.classList.remove('active'); });

    window.addEventListener('click', function(e) {
        if (e.target === userLoginModal) userLoginModal.classList.remove('active');
        if (e.target === userRegisterModal) userRegisterModal.classList.remove('active');
        if (e.target === devPanel) devPanel.classList.remove('active');
        if (e.target === paymentModal) paymentModal.classList.remove('active');
        if (e.target === cartModal) cartModal.classList.remove('active');
    });
}

function loginCustomer(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        if (userLoginModal) userLoginModal.classList.remove('active');
        updateUIAfterLogin();
        showNotification(`Selamat datang, ${user.name}!`);
        addRecentActivity('user', `${user.name} login sebagai pembeli`);
        localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        alert('Email atau password salah!');
    }
}

function loginAdmin(username, password) {
    const admin = admins.find(a => a.username === username && a.password === password);
    if (admin) {
        currentAdmin = admin;
        if (userLoginModal) userLoginModal.classList.remove('active');
        if (devPanel) devPanel.classList.add('active');
        populateProductSelect();
        updateAdminWelcome(admin.name);
        showNotification(`Selamat datang, ${admin.name}!`);
        addRecentActivity('system', `${admin.name} login sebagai admin`);
        adminAccessBtn.style.display = 'block';
        localStorage.setItem('currentAdmin', JSON.stringify(admin));
    } else alert('Username atau password admin salah!');
}

function registerCustomer() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    if (password !== confirmPassword) { alert('Password dan konfirmasi password tidak cocok!'); return; }
    if (users.find(u => u.email === email)) { alert('Email sudah terdaftar!'); return; }
    const newUser = { id: users.length + 1, name, email, password, phone, joinDate: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long' }) };
    users.push(newUser);
    userRegisterModal.classList.remove('active');
    userLoginModal.classList.add('active');
    showNotification('Pendaftaran berhasil! Silakan login.');
}

function simulateGoogleLogin(type) {
    const fakeUsers = [{ name: "Google User", email: "google.user@example.com" }, { name: "Test User", email: "test.user@example.com" }, { name: "Demo User", email: "demo.user@example.com" }];
    const fakeAdmins = [{ name: "Google Admin", email: "admin@hydrotech.com" }, { name: "System Admin", email: "system@hydrotech.com" }];
    const randomUser = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
    const randomAdmin = fakeAdmins[Math.floor(Math.random() * fakeAdmins.length)];
    if (type === 'customer') {
        let user = users.find(u => u.email === randomUser.email);
        if (!user) { user = { id: users.length + 1, name: randomUser.name, email: randomUser.email, password: 'google123', phone: '+62 812-3456-7890', joinDate: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long' }) }; users.push(user); }
        currentUser = user;
        userLoginModal.classList.remove('active');
        updateUIAfterLogin();
        showNotification(`Selamat datang, ${user.name}!`);
        addRecentActivity('user', `${user.name} login dengan Google`);
        localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        currentAdmin = { username: 'google.admin', name: randomAdmin.name };
        userLoginModal.classList.remove('active');
        devPanel.classList.add('active');
        populateProductSelect();
        updateAdminWelcome(randomAdmin.name);
        showNotification(`Selamat datang, ${randomAdmin.name}!`);
        addRecentActivity('system', `${randomAdmin.name} login dengan Google`);
        adminAccessBtn.style.display = 'block';
        localStorage.setItem('currentAdmin', JSON.stringify({ username: 'google.admin', name: randomAdmin.name }));
    }
}

function updateUIAfterLogin() {
    if (currentUser) {
        if (userLoginBtn) userLoginBtn.style.display = 'none';
        if (userInfo) userInfo.style.display = 'flex';
        if (userGreeting) userGreeting.textContent = `Halo, ${currentUser.name.split(' ')[0]}!`;
        updateUserProfile();
    }
}

function updateAdminWelcome(name) {
    const el = document.getElementById('adminWelcome');
    if (el) el.textContent = `Selamat Datang, ${name}!`;
}

function logoutCustomer() {
    currentUser = null;
    if (userInfo) userInfo.style.display = 'none';
    if (userLoginBtn) userLoginBtn.style.display = 'block';
    cart = [];
    updateCartDisplay();
    showNotification('Anda telah logout');
    localStorage.removeItem('currentUser');
}

function logoutAdmin() {
    currentAdmin = null;
    if (devPanel) devPanel.classList.remove('active');
    if (adminAccessBtn) adminAccessBtn.style.display = 'none';
    showNotification('Admin telah logout');
    localStorage.removeItem('currentAdmin');
}

function checkExistingLogin() {
    const savedUser = localStorage.getItem('currentUser');
    const savedAdmin = localStorage.getItem('currentAdmin');
    if (savedUser) { currentUser = JSON.parse(savedUser); updateUIAfterLogin(); }
    if (savedAdmin) { currentAdmin = JSON.parse(savedAdmin); adminAccessBtn.style.display = 'block'; updateAdminWelcome(currentAdmin.name); }
}

function setupEventListeners() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            navLinks.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
            const target = document.getElementById(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
        });
    });

    if (menuToggle) menuToggle.addEventListener('click', function() { navMenu.classList.toggle('active'); });

    if (cartBtn) cartBtn.addEventListener('click', function() {
        if (cart.length === 0) showNotification('Keranjang belanja kosong');
        else showCartModal();
    });

    if (editProfileBtn) editProfileBtn.addEventListener('click', function() { showNotification('Fitur edit profil akan segera tersedia'); });

    if (messageForm) messageForm.addEventListener('submit', function(e) { e.preventDefault(); showNotification('Pesan berhasil dikirim!'); messageForm.reset(); });
    if (paymentForm) paymentForm.addEventListener('submit', function(e) { e.preventDefault(); processPayment(); });

    window.addEventListener('scroll', handleScroll);

    setupTouchEvents();
}

function handleScroll() {
    if (window.scrollY > 50) header.classList.add('scrolled'); else header.classList.remove('scrolled');
    animateOnScroll();
}

function setupParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        parallaxLayers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed')) || 0;
            const yPos = -(scrolled * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
}

function setupCategoryFilter() {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterProductsByCategory(category);
        });
    });
}

function filterProductsByCategory(category) {
    let filtered;
    if (category === 'all') filtered = products;
    else filtered = products.filter(p => p.category === category);
    displayProducts(filtered, productsGrid);
}

function setupTouchEvents() {
    const buttons = document.querySelectorAll('button, .nav-link, .product-card');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() { this.classList.add('touch-active'); });
        button.addEventListener('touchend', function() { this.classList.remove('touch-active'); });
    });
}

function displayProducts(productsArray, container) {
    if (!container) return;
    container.innerHTML = '';
    if (!productsArray || productsArray.length === 0) { container.innerHTML = '<p class="no-products">Tidak ada produk dalam kategori ini</p>'; return; }
    productsArray.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                <div class="product-actions">
                    <button class="btn-secondary add-to-cart" data-id="${product.id}">Tambah ke Keranjang</button>
                    <button class="btn-primary buy-now" data-id="${product.id}">Beli Sekarang</button>
                </div>
            </div>
        `;
        container.appendChild(productCard);
    });

    setTimeout(() => {
        const productCards = container.querySelectorAll('.product-card');
        productCards.forEach(card => { if (isElementInViewport(card)) card.classList.add('fade-in'); });
    }, 100);
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        const btn = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
        const pid = parseInt(btn.getAttribute('data-id'));
        addToCart(pid);
    }
    if (e.target.classList.contains('buy-now') || e.target.closest('.buy-now')) {
        const btn = e.target.classList.contains('buy-now') ? e.target : e.target.closest('.buy-now');
        const pid = parseInt(btn.getAttribute('data-id'));
        buyNow(pid);
    }
});

function buyNow(productId) {
    if (!currentUser) { showNotification('Silakan login terlebih dahulu untuk membeli produk'); userLoginModal.classList.add('active'); return; }
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(i => i.id === productId);
    if (existing) existing.quantity += 1; else cart.push({ ...product, quantity: 1 });
    updateCartDisplay();
    showPaymentModal();
    showNotification(`Lanjutkan pembayaran untuk ${product.name}`);
    addRecentActivity('sale', `${product.name} akan dibeli seharga Rp ${product.price.toLocaleString('id-ID')}`);
}

function addToCart(productId) {
    if (!currentUser) { showNotification('Silakan login terlebih dahulu untuk menambahkan ke keranjang'); userLoginModal.classList.add('active'); return; }
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
        showNotification(`${product.name} ditambah (Total: ${existing.quantity})`);
    } else {
        cart.push({ ...product, quantity: 1 });
        showNotification(`${product.name} ditambahkan ke keranjang`);
    }
    updateCartDisplay();
    addRecentActivity('cart', `${product.name} ditambahkan ke keranjang`);
}

function renderCartItems() {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }

    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80?text=No+Image'">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-category">${item.category}</div>
                <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                <div class="cart-item-subtotal">Subtotal: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn decrease-btn" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}" readonly>
                    <button class="quantity-btn increase-btn" data-id="${item.id}"><i class="fas fa-plus"></i></button>
                </div>
                <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    setupQuantityEventListeners();
}

function setupQuantityEventListeners() {
    document.querySelectorAll('.increase-btn').forEach(btn => {
        btn.onclick = () => {
            const productId = parseInt(btn.getAttribute('data-id'));
            const idx = cart.findIndex(i => i.id === productId);
            if (idx !== -1) { cart[idx].quantity += 1; updateCartDisplay(); showNotification('Jumlah produk ditambahkan'); }
        };
    });

    document.querySelectorAll('.decrease-btn').forEach(btn => {
        btn.onclick = () => {
            const productId = parseInt(btn.getAttribute('data-id'));
            const idx = cart.findIndex(i => i.id === productId);
            if (idx === -1) return;
            if (cart[idx].quantity > 1) { cart[idx].quantity -= 1; updateCartDisplay(); showNotification('Jumlah produk dikurangi'); }
            else { removeItem(productId); }
        };
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.onclick = () => {
            const productId = parseInt(btn.getAttribute('data-id'));
            removeItem(productId);
        };
    });
}

function removeItem(productId) {
    const idx = cart.findIndex(i => i.id === productId);
    if (idx !== -1) {
        const name = cart[idx].name;
        cart.splice(idx, 1);
        updateCartDisplay();
        showNotification(`${name} dihapus dari keranjang`);
        if (cart.length === 0) setTimeout(() => { if (cartModal) cartModal.classList.remove('active'); }, 800);
    }
}

function updateCartDisplay() {
    renderCartItems();
    updateCartTotal();
    updateCartCount();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    if (cartTotalAmount) cartTotalAmount.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function setupCartEventListeners() {
    if (closeCartBtn) closeCartBtn.addEventListener('click', function() { if (cartModal) cartModal.classList.remove('active'); });
    if (checkoutBtn) checkoutBtn.addEventListener('click', function() {
        if (cart.length > 0) { if (cartModal) cartModal.classList.remove('active'); showPaymentModal(); }
    });
}

function showCartModal() {
    if (!cartModal) return;
    renderCartItems();
    updateCartTotal();
    cartModal.classList.add('active');
}

function showPaymentModal() {
    if (!paymentModal) return;
    const paymentItems = document.getElementById('payment-items');
    const paymentTotalAmount = document.getElementById('payment-total-amount');
    if (!paymentItems || !paymentTotalAmount) return;
    paymentItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const qty = item.quantity || 1;
        const itemTotal = item.price * qty;
        const div = document.createElement('div');
        div.className = 'payment-item';
        div.innerHTML = `<div><span>${item.name}</span>${qty>1 ? `<small>${qty} x Rp ${item.price.toLocaleString('id-ID')}</small>` : ''}</div><span>Rp ${itemTotal.toLocaleString('id-ID')}</span>`;
        paymentItems.appendChild(div);
        total += itemTotal;
    });
    paymentTotalAmount.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    paymentModal.classList.add('active');
}

function processPayment() {
    if (cart.length === 0) { showNotification('Keranjang belanja kosong'); return; }
    let total = 0;
    const purchasedItems = [];
    cart.forEach(item => {
        const qty = item.quantity || 1;
        for (let i = 0; i < qty; i++) soldProducts.push(item);
        total += item.price * qty;
        purchasedItems.push(`${item.name}${qty>1?` (${qty}x)`:''}`);
        addRecentActivity('sale', `${item.name}${qty>1?` (${qty}x)`:''} terjual seharga Rp ${(item.price*qty).toLocaleString('id-ID')}`);
    });
    totalRevenue += total;
    cart = [];
    updateCartDisplay();
    updateDashboard();
    paymentModal.classList.remove('active');
    const itemsList = purchasedItems.slice(0,3).join(', ');
    showNotification(`Pembayaran berhasil! Total: Rp ${total.toLocaleString('id-ID')}`);
    updateChart();
}

function addRecentActivity(type, message) {
    const activities = { 'cart': { icon: 'fas fa-shopping-cart', color: '#3498db' }, 'sale': { icon: 'fas fa-dollar-sign', color: '#2ecc71' }, 'user': { icon: 'fas fa-user', color: '#9b59b6' }, 'system': { icon: 'fas fa-cog', color: '#f39c12' } };
    const activity = { type, message, icon: activities[type]?.icon || 'fas fa-info-circle', color: activities[type]?.color || '#7f8c8d', timestamp: new Date().toLocaleTimeString('id-ID') };
    recentActivities.unshift(activity);
    if (recentActivities.length > 5) recentActivities.pop();
    updateRecentActivities();
}

function updateRecentActivities() {
    const activitiesContainer = document.getElementById('recent-activities');
    if (!activitiesContainer) return;
    activitiesContainer.innerHTML = '';
    recentActivities.forEach(act => {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `<div class="activity-icon" style="background-color: ${act.color}20; color: ${act.color}"><i class="${act.icon}"></i></div><div class="activity-details"><h4>${act.message}</h4><p>${act.timestamp}</p></div>`;
        activitiesContainer.appendChild(item);
    });
}

function updateDashboard() {
    const totalProductsEl = document.getElementById('total-products');
    const soldItemsEl = document.getElementById('sold-items');
    const revenueEl = document.getElementById('revenue');
    const activeUsersEl = document.getElementById('active-users');
    if (totalProductsEl) totalProductsEl.textContent = products.length;
    if (soldItemsEl) soldItemsEl.textContent = soldProducts.length;
    if (revenueEl) revenueEl.textContent = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
    if (activeUsersEl) activeUsersEl.textContent = users.length;
    updateRecentActivities();
}

function initializeChart() {
    const canvas = document.getElementById('salesChart');
    if (!canvas) return;
    try {
        const ctx = canvas.getContext('2d');
        window.salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan','Feb','Mar','Apr','Mei','Jun'],
                datasets: [{
                    label: 'Penjualan (dalam unit)',
                    data: [12,19,8,15,12,17],
                    borderColor: '#1e6ea7',
                    backgroundColor: 'rgba(30,110,167,0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
        });
    } catch (e) { }
}

function updateChart() {
    if (!window.salesChart) return;
    const newData = window.salesChart.data.datasets[0].data.map(v => v + Math.floor(Math.random()*5));
    window.salesChart.data.datasets[0].data = newData;
    window.salesChart.update();
}

function startQuotesSlider() {
    const quotes = document.querySelectorAll('.quote');
    if (!quotes || quotes.length === 0) return;
    let current = 0;
    setInterval(() => {
        quotes[current].classList.remove('active');
        current = (current + 1) % quotes.length;
        quotes[current].classList.add('active');
    }, 5000);
}

function setupDeveloperPanel() {
    if (closeDevPanelBtn) closeDevPanelBtn.addEventListener('click', function() { if (devPanel) devPanel.classList.remove('active'); });
    if (updatePriceBtn) updatePriceBtn.addEventListener('click', function() {
        const selectedProductId = parseInt(productSelect.value);
        const newPrice = parseInt(newPriceInput.value);
        if (selectedProductId && newPrice) {
            const idx = products.findIndex(p => p.id === selectedProductId);
            if (idx !== -1) {
                products[idx].price = newPrice;
                displayProducts(products, productsGrid);
                displayProducts(products.slice(0,5), recommendedProducts);
                showNotification('Harga produk berhasil diupdate');
                addRecentActivity('system', `Harga produk ${products[idx].name} diupdate`);
                newPriceInput.value = '';
            }
        }
    });
    if (addProductForm) addProductForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('newProductName').value;
        const price = parseInt(document.getElementById('newProductPrice').value);
        const category = document.getElementById('newProductCategory').value;
        const image = document.getElementById('newProductImage').value;
        if (name && price && category && image) {
            const newProduct = { id: products.length + 1, name, price, category, image };
            products.push(newProduct);
            displayProducts(products, productsGrid);
            populateProductSelect();
            addProductForm.reset();
            showNotification(`Produk ${name} berhasil ditambahkan`);
            addRecentActivity('system', `Produk baru ${name} ditambahkan`);
            updateDashboard();
        }
    });
    populateProductSelect();
}

function populateProductSelect() {
    if (!productSelect) return;
    productSelect.innerHTML = '';
    products.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name} - Rp ${p.price.toLocaleString('id-ID')}`;
        productSelect.appendChild(opt);
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => { if (notification && notification.parentNode) notification.parentNode.removeChild(notification); }, 300);
    }, 2000);
}

function isElementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0);
}

function animateOnScroll() {
    sections.forEach(s => { if (isElementInViewport(s)) s.classList.add('fade-in'); });
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, i) => { if (isElementInViewport(card)) setTimeout(() => card.classList.add('fade-in'), i * 100); });
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, i) => { if (isElementInViewport(card)) setTimeout(() => card.classList.add('fade-in'), i * 150); });
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((it, i) => { if (isElementInViewport(it)) setTimeout(() => it.classList.add('fade-in'), i * 100); });
    const developerCards = document.querySelectorAll('.developer-card');
    developerCards.forEach((card, i) => { if (isElementInViewport(card)) setTimeout(() => card.classList.add('fade-in'), i * 200); });
    const profileCard = document.querySelector('.profile-card'); if (profileCard && isElementInViewport(profileCard)) profileCard.classList.add('fade-in');
    const contactForm = document.querySelector('.contact-form'); if (contactForm && isElementInViewport(contactForm)) contactForm.classList.add('fade-in');
}

function updateUserProfile() {
    if (!currentUser) return;
    const elName = document.getElementById('profile-name');
    const elEmail = document.getElementById('profile-email');
    const elLoginEmail = document.getElementById('profile-login-email');
    const elPhone = document.getElementById('profile-phone');
    const elJoin = document.getElementById('profile-join-date');
    const elStatus = document.getElementById('profile-status');
    if (elName) elName.textContent = currentUser.name;
    if (elEmail) elEmail.textContent = currentUser.email;
    if (elLoginEmail) elLoginEmail.textContent = currentUser.email;
    if (elPhone) elPhone.textContent = currentUser.phone;
    if (elJoin) elJoin.textContent = currentUser.joinDate;
    if (elStatus) elStatus.textContent = "Aktif";
}

const logo = document.querySelector('.logo');
if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        navLinks.forEach(n => n.classList.remove('active'));
        const homeLink = document.querySelector('a[href="#home"]');
        if (homeLink) homeLink.classList.add('active');
        const homeSection = document.getElementById('home');
        if (homeSection) homeSection.scrollIntoView({ behavior: 'smooth' });
    });
}
