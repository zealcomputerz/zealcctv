
js_content = '''/* ========================================
   ZEAL COMPUTER & CCTV SOLUTIONS
   Main JavaScript File
   ======================================== */

// ========================================
// DEFAULT PRODUCTS DATA
// ========================================
const defaultProducts = [
    {
        id: 1,
        name: "HD Dome Camera",
        price: 8500,
        image: "https://images.unsplash.com/photo-1581092921461-7d65ca45d9c3?w=400",
        description: "High-definition indoor dome camera with night vision"
    },
    {
        id: 2,
        name: "Outdoor Bullet Camera",
        price: 12000,
        image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?w=400",
        description: "Weatherproof bullet camera for outdoor surveillance"
    },
    {
        id: 3,
        name: "4-Channel DVR System",
        price: 25000,
        image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?w=400",
        description: "Digital video recorder with 4 camera inputs"
    },
    {
        id: 4,
        name: "PTZ Camera",
        price: 35000,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        description: "Pan-tilt-zoom camera with 360° coverage"
    },
    {
        id: 5,
        name: "Wireless IP Camera",
        price: 15000,
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400",
        description: "Easy setup wireless camera with mobile app"
    },
    {
        id: 6,
        name: "8-Channel NVR System",
        price: 45000,
        image: "https://images.pexels.com/photos/207877/pexels-photo-207877.jpeg?w=400",
        description: "Network video recorder for IP cameras"
    }
];

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Format price in LKR format
function formatPrice(price) {
    return 'Rs. ' + price.toLocaleString('en-IN');
}

// Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Show alert modal
function showAlert(title, message, type = 'success') {
    const modal = document.getElementById('alertModal');
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');
    const icon = modal.querySelector('.success-icon');
    
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    
    // Update icon based on type
    if (type === 'success') {
        icon.className = 'fas fa-check-circle success-icon';
        icon.style.color = 'var(--success)';
    } else if (type === 'error') {
        icon.className = 'fas fa-exclamation-circle success-icon';
        icon.style.color = 'var(--danger)';
    }
    
    modal.style.display = 'block';
    
    // Auto close after 3 seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}

// Close modal when clicking X
if (document.querySelector('.close')) {
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('alertModal').style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('alertModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ========================================
// PRODUCT MANAGEMENT
// ========================================

// Get products from localStorage or use defaults
function getProducts() {
    const stored = localStorage.getItem('zealProducts');
    if (stored) {
        return JSON.parse(stored);
    }
    // Initialize with defaults if empty
    localStorage.setItem('zealProducts', JSON.stringify(defaultProducts));
    return defaultProducts;
}

// Save products to localStorage
function saveProducts(products) {
    localStorage.setItem('zealProducts', JSON.stringify(products));
}

// Render products to the grid
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    const products = getProducts();
    
    grid.innerHTML = products.map(product => `
        <div class="product-card" data-aos="fade-up">
            <div style="overflow: hidden; border-radius: 20px 20px 0 0;">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <p class="product-description">${product.description}</p>
                <button class="btn btn-primary btn-small" onclick="inquireProduct('${product.name}')">
                    <i class="fas fa-shopping-cart"></i> Inquire Now
                </button>
            </div>
        </div>
    `).join('');
}

// Inquire about a product (redirect to contact with product name)
function inquireProduct(productName) {
    const contactSection = document.getElementById('contact');
    const messageField = document.getElementById('message');
    
    if (contactSection && messageField) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        messageField.value = `I am interested in ${productName}. Please provide more information.`;
    }
}

// ========================================
// CONTACT FORM HANDLING
// ========================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            id: generateId(),
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            date: new Date().toLocaleString()
        };
        
        // Save to localStorage
        const messages = JSON.parse(localStorage.getItem('zealMessages') || '[]');
        messages.unshift(formData);
        localStorage.setItem('zealMessages', JSON.stringify(messages));
        
        // Show success message
        showAlert('Message Sent!', 'Thank you for contacting us. We will get back to you soon.');
        
        // Reset form
        form.reset();
    });
}

// ========================================
// NAVIGATION & SCROLL EFFECTS
// ========================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Sticky navbar effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNav();
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// ADMIN AUTHENTICATION
// ========================================

const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: '1234'
};

function initAdminLogin() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            localStorage.setItem('zealAdminLoggedIn', 'true');
            localStorage.setItem('zealAdminSession', Date.now().toString());
            window.location.href = 'dashboard.html';
        } else {
            showAlert('Login Failed', 'Invalid username or password. Please try again.', 'error');
        }
    });
}

// Check if admin is logged in
function checkAdminAuth() {
    const isLoggedIn = localStorage.getItem('zealAdminLoggedIn');
    const session = localStorage.getItem('zealAdminSession');
    
    // Check if on dashboard page
    if (window.location.pathname.includes('dashboard.html')) {
        if (!isLoggedIn) {
            window.location.href = 'login.html';
            return false;
        }
        
        // Check session expiry (24 hours)
        if (session) {
            const sessionTime = parseInt(session);
            const now = Date.now();
            if (now - sessionTime > 24 * 60 * 60 * 1000) {
                logoutAdmin();
                return false;
            }
        }
    }
    
    return true;
}

// Logout admin
function logoutAdmin() {
    localStorage.removeItem('zealAdminLoggedIn');
    localStorage.removeItem('zealAdminSession');
    window.location.href = 'login.html';
}

// ========================================
// ADMIN DASHBOARD FUNCTIONS
// ========================================

function initAdminDashboard() {
    if (!checkAdminAuth()) return;
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logoutAdmin();
        });
    }
    
    // Load products table
    loadProductsTable();
    
    // Load messages
    loadMessages();
    
    // Add product button
    const addProductBtn = document.getElementById('addProductBtn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', () => openProductModal());
    }
    
    // Close modal buttons
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', closeProductModal);
    }
    
    // Product form submission
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', handleProductSubmit);
    }
    
    // Image URL preview
    const imageUrl = document.getElementById('productImage');
    if (imageUrl) {
        imageUrl.addEventListener('input', updateImagePreview);
    }
}

// Load products into admin table
function loadProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    if (!tbody) return;
    
    const products = getProducts();
    
    if (products.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px;">
                    No products found. Click "Add Product" to create one.
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = products.map(product => `
        <tr>
            <td>
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/80?text=No+Image'">
            </td>
            <td>${product.name}</td>
            <td>${formatPrice(product.price)}</td>
            <td>${product.description}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-edit" onclick="editProduct('${product.id}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn-delete" onclick="deleteProduct('${product.id}')">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Load messages
function loadMessages() {
    const container = document.getElementById('messagesContainer');
    if (!container) return;
    
    const messages = JSON.parse(localStorage.getItem('zealMessages') || '[]');
    
    if (messages.length === 0) {
        container.innerHTML = `
            <div class="no-messages">
                <i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 15px;"></i>
                <p>No messages yet</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = messages.map(msg => `
        <div class="message-card">
            <div class="message-header">
                <span class="message-name">${msg.name}</span>
                <span class="message-date">${msg.date}</span>
            </div>
            <div class="message-email">
                <i class="fas fa-envelope"></i> ${msg.email}
                ${msg.phone ? `| <i class="fas fa-phone"></i> ${msg.phone}` : ''}
            </div>
            <div class="message-text">${msg.message}</div>
        </div>
    `).join('');
}

// Open product modal (add/edit)
function openProductModal(product = null) {
    const modal = document.getElementById('productModal');
    const title = document.getElementById('modalTitle');
    const form = document.getElementById('productForm');
    const preview = document.getElementById('imagePreview');
    
    form.reset();
    document.getElementById('productId').value = '';
    preview.innerHTML = `
        <div class="image-placeholder">
            <i class="fas fa-image"></i>
            <p>Enter image URL to preview</p>
        </div>
    `;
    
    if (product) {
        title.textContent = 'Edit Product';
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('productImage').value = product.image;
        updateImagePreview();
    } else {
        title.textContent = 'Add New Product';
    }
    
    modal.style.display = 'block';
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

// Update image preview
function updateImagePreview() {
    const url = document.getElementById('productImage').value;
    const preview = document.getElementById('imagePreview');
    
    if (url) {
        preview.innerHTML = `<img src="${url}" alt="Preview" onerror="this.parentElement.innerHTML='<div class=\\'image-placeholder\\'><i class=\\'fas fa-exclamation-triangle\\'></i><p>Invalid image URL</p></div>'">`;
    } else {
        preview.innerHTML = `
            <div class="image-placeholder">
                <i class="fas fa-image"></i>
                <p>Enter image URL to preview</p>
            </div>
        `;
    }
}

// Handle product form submission
function handleProductSubmit(e) {
    e.preventDefault();
    
    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const description = document.getElementById('productDescription').value;
    const image = document.getElementById('productImage').value;
    
    const products = getProducts();
    
    if (id) {
        // Edit existing
        const index = products.findIndex(p => p.id.toString() === id);
        if (index !== -1) {
            products[index] = { ...products[index], name, price, description, image };
        }
    } else {
        // Add new
        const newProduct = {
            id: generateId(),
            name,
            price,
            description,
            image
        };
        products.push(newProduct);
    }
    
    saveProducts(products);
    closeProductModal();
    loadProductsTable();
    showAlert('Success!', `Product ${id ? 'updated' : 'added'} successfully.`);
}

// Edit product
function editProduct(id) {
    const products = getProducts();
    const product = products.find(p => p.id.toString() === id);
    if (product) {
        openProductModal(product);
    }
}

// Delete product
function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        let products = getProducts();
        products = products.filter(p => p.id.toString() !== id);
        saveProducts(products);
        loadProductsTable();
        showAlert('Deleted!', 'Product has been removed.');
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize main website
    renderProducts();
    initContactForm();
    initNavigation();
    initScrollAnimations();
    
    // Initialize admin pages
    initAdminLogin();
    initAdminDashboard();
});

// Make functions available globally for onclick handlers
window.inquireProduct = inquireProduct;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.closeProductModal = closeProductModal;
'''

# Save the JavaScript file
with open('/mnt/kimi/output/script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("✅ script.js created successfully!")
print(f"File size: {len(js_content)} characters")
