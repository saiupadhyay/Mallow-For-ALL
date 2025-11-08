// // Cart functionality
// const cartCount = document.getElementById('cartCount');
// const cartIcon = document.getElementById('cartIcon');
// let count = 0;

// cartIcon.addEventListener('click', () => {
//   count++;
//   cartCount.textContent = count;
// });

// Products Section
const products = [
 {
    title: "Charcoal Soap",
    price: "₹65",
    img: "./Picture/Charcoal.png",
    desc: "Deep cleanse your skin naturally with our activated Charcoal Soap. It helps draw out impurities, dirt, and excess oil while leaving your skin fresh and smooth.",
    benefits: "Detoxifies pores, controls oil, prevents acne and blackheads.",
    ingredients: "Activated Charcoal, Coconut Oil, Shea Butter, Glycerin.",
    skinType: "Oily & Combination Skin."
  },
  {
    title: "Kesar Chandan Soap",
    price: "₹55",
    img: "./Picture/Kesar Chandan.png",
    desc: "A luxurious blend of Kesar (Saffron) and Chandan (Sandalwood) that gives your skin a radiant glow while keeping it hydrated and soft.",
    benefits: "Brightens skin, improves texture, adds natural fragrance.",
    ingredients: "Saffron Extract, Sandalwood Oil, Coconut Oil, Glycerin.",
    skinType: "All Skin Types (especially dull and dry skin)."
  },
  {
    title: "Strawberry Soap",
    price: "₹55",
    img: "./Picture/strawberry.png",
    desc: "Indulge in a fruity bath experience with our Strawberry Soap. Its rich lather gently cleanses and nourishes the skin, leaving a soft, sweet fragrance behind.",
    benefits: "Moisturizes deeply, improves skin tone, refreshes the body.",
    ingredients: "Strawberry Extract, Coconut Oil, Shea Butter, Vitamin E.",
    skinType: "All Skin Types (ideal for normal to dry skin)."
  },
  {
    title: "Tutti Frutti Soap",
    price: "₹65",
    img: "./Picture/Tutti frutty.jpg",
    desc: "A colorful, fun, and refreshing soap that energizes your senses. Enriched with natural fruit extracts for bright and youthful skin.",
    benefits: "Gently exfoliates, brightens complexion, rejuvenates dull skin.",
    ingredients: "Mixed Fruit Extracts, Coconut Oil, Glycerin, Vitamin E.",
    skinType: "All Skin Types (great for daily use)."
  },
  {
    title: "Lemon Soap",
    price: "₹65",
    img: "./Picture/lemon.jpg",
    desc: "Infused with pure lemon extract, this soap revitalizes your skin and removes excess oil. Its refreshing citrus scent keeps you feeling fresh all day.",
    benefits: "Cleanses deeply, reduces acne, adds natural glow.",
    ingredients: "Lemon Extract, Olive Oil, Aloe Vera, Vitamin C.",
    skinType: "Oily & Combination Skin (ideal for summer)."
  },
{
  title: "Pink Rose Soap",
  price: "₹65",
  img: "./Picture/pink rose.png",
  desc: "Experience the delicate fragrance and softness of pure roses. Pink Rose Soap deeply nourishes and refreshes your skin while leaving a lingering floral aroma.",
  benefits: "Hydrates skin, adds natural glow, soothes irritation.",
  ingredients: "Rose Extract, Coconut Oil, Shea Butter, Vitamin E.",
  skinType: "Normal to Dry Skin (ideal for daily use)."
},
{
  title: "Ubtan Soap",
  price: "₹90",
  img: "./Picture/ubtan soap.png",
  desc: "Inspired by traditional Indian skincare rituals, Ubtan Soap gently exfoliates and brightens the skin using natural herbs and grains. It leaves your skin smooth, radiant, and tan-free.",
  benefits: "Exfoliates gently, removes tan, brightens complexion.",
  ingredients: "Gram Flour, Turmeric, Sandalwood, Rose Water, Almond Oil.",
  skinType: "All Skin Types (especially dull or tanned skin)."
},
{
  title: "Neem Soap",
  price: "₹55",
  img: "./Picture/neem.png",
  desc: "Neem Soap is a powerful antibacterial cleanser that helps fight acne and protects your skin from daily impurities. Perfect for oily and sensitive skin.",
  benefits: "Cleanses pores, controls acne, purifies skin naturally.",
  ingredients: "Neem Extract, Tulsi, Coconut Oil, Tea Tree Oil.",
  skinType: "Oily & Acne-Prone Skin."
},
{
  title: "Milk Honey Scrub Soap",
  price: "₹85",
  img: "./Picture/milk honey.png",
  desc: "A creamy blend of milk and honey enriched with natural scrub particles. It gently removes dead skin cells, deeply moisturizes, and restores smoothness.",
  benefits: "Exfoliates, nourishes, softens and brightens skin.",
  ingredients: "Milk Extract, Honey, Almond Powder, Shea Butter, Vitamin E.",
  skinType: "Dry & Normal Skin."
},
{
  title: "Cool Mint Soap",
  price: "₹55",
  img: "./Picture/cool mint.png",
  desc: "Experience instant freshness and rejuvenation with Cool Mint Soap. Its cooling formula soothes tired skin, reduces inflammation, and leaves a lasting minty fragrance.",
  benefits: "Cooling effect, refreshes, reduces irritation.",
  ingredients: "Peppermint Oil, Menthol, Aloe Vera.",
  skinType: "All Skin Types (ideal for summer)."
},
{
  title: "Herbal Hair Shampoo",
  price: "₹295",
  img: "./Picture/shampoo 3.jpg",
  desc: "A natural, chemical-free shampoo formulated with herbal extracts that strengthen roots, reduce dandruff, and leave your hair soft and manageable.",
  benefits: "Cleans scalp, controls dandruff, promotes stronger hair growth.",
  ingredients: "Amla, Reetha, Bhringraj, Aloe Vera, Neem.",
  skinType: "All Hair Types (especially weak or dandruff-prone hair)."
},
{
  title: "Rose Hair Serum",
  price: "₹280",
  img: "./Picture/seerum 2.jpg",
  desc: "Lightweight and non-sticky, our Rose Hair Serum adds shine and softness while protecting from heat and frizz. Infused with rose oil for a natural, smooth finish.",
  benefits: "Smoothens frizz, adds shine, protects from heat damage.",
  ingredients: "Rose Oil, Argan Oil, Jojoba Oil, Vitamin E.",
  skinType: "All Hair Types."
},
{
  title: "Vitamin C Face Serum",
  price: "₹235",
  img: "./Picture/seerum 3.jpg",
  desc: "A brightening and hydrating face serum powered by Vitamin C that fades dark spots, evens skin tone, and promotes a natural glow with regular use.",
  benefits: "Reduces pigmentation, brightens skin, boosts radiance.",
  ingredients: "Vitamin C, Hyaluronic Acid, Orange Extract, Aloe Vera.",
  skinType: "All Skin Types (recommended for dull or uneven skin tone)."
}

];

// Render product cards
const productGrid = document.getElementById('productGrid');
productGrid.innerHTML = '';

products.forEach((p, index) => {
  const card = document.createElement('div');
  card.classList.add('product-card');

  // Card HTML
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p>${p.price}</p>
    <button class="btn add-btn">Add to Cart</button>
  `;

  // 1. Clicking anywhere on the card (except the button) → open modal
  card.addEventListener('click', e => {
    if (!e.target.classList.contains('add-btn')) {
      openProduct(index);
    }
  });

  // 2. Clicking Add to Cart button → add item to cart directly
  const addBtn = card.querySelector('.add-btn');
  addBtn.addEventListener('click', e => {
    e.stopPropagation(); // prevent opening modal
    const existing = cart.find(item => item.title === p.title);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...p, qty: 1 });
    }
    updateCart();
  });

  productGrid.appendChild(card);
});



// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


// ====================== PRODUCT MODAL + CART PANEL SYSTEM ======================

// Elements
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');
const addToCartBtn = document.getElementById('addToCartBtn');
const buyNowBtn = document.getElementById('buyNowBtn');
const qtyValue = document.getElementById('qtyValue');
const increaseQty = document.getElementById('increaseQty');
const decreaseQty = document.getElementById('decreaseQty');

const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');

// State
let currentProduct = null;
let currentQty = 1;
let cart = [];

// ========== MODAL FUNCTIONALITY ==========

function openProduct(index) {
  const p = products[index];
  currentProduct = p;
  currentQty = 1;
  qtyValue.textContent = currentQty;

  modalImg.src = p.img;
  modalTitle.textContent = p.title;
  modalPrice.textContent = p.price;
  modalDesc.textContent = p.desc || "";
  document.getElementById('modalBenefits').textContent = p.benefits || "—";
  document.getElementById('modalIngredients').textContent = p.ingredients || "—";
  document.getElementById('modalSkin').textContent = p.skinType || "—";

  modal.classList.add('show');
}


closeModal.addEventListener('click', () => modal.classList.remove('show'));
window.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('show');
});

increaseQty.addEventListener('click', () => {
  currentQty++;
  qtyValue.textContent = currentQty;
});

decreaseQty.addEventListener('click', () => {
  if (currentQty > 1) currentQty--;
  qtyValue.textContent = currentQty;
});

// ===== Buy Now (go directly to checkout page) =====
buyNowBtn.addEventListener('click', () => {
  if (!currentProduct) return;

  // Create a temporary single-item cart for checkout
  const buyNowItem = [{ ...currentProduct, qty: currentQty }];

  // Save to localStorage so checkout page can access it
  localStorage.setItem('mallow_cart', JSON.stringify(buyNowItem));

  // Close modal
  modal.classList.remove('show');

  // Open checkout page in new tab/window
  window.open('checkout.html', '_blank');
});


// ========== CART FUNCTIONALITY ==========

// Toggle cart panel open/close
function toggleCart() {
  cartPanel.classList.toggle('show');
}

cartIcon.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart);

// Add to cart from modal
addToCartBtn.addEventListener('click', () => {
  if (!currentProduct) return;

  const priceValue = parseInt(currentProduct.price.replace('₹', '').trim());
  const existing = cart.find(item => item.title === currentProduct.title);

  if (existing) {
    existing.qty += currentQty;
  } else {
    cart.push({
      title: currentProduct.title,
      price: priceValue,
      img: currentProduct.img,
      qty: currentQty
    });
  }

  updateCart();
  modal.classList.remove('show');
});

// Update cart display
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    // Convert price safely to number
    const priceNum = parseInt(item.price.toString().replace('₹', '').trim(), 10);
    const subtotal = priceNum * item.qty;
    total += subtotal;

    const itemEl = document.createElement('div');
    itemEl.classList.add('cart-item');
    itemEl.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <p>₹${priceNum} × ${item.qty} = <strong>₹${subtotal}</strong></p>
      </div>
      <button class="qty-btn" onclick="removeCartItem(${index})">×</button>
    `;
    cartItemsContainer.appendChild(itemEl);
  });

  cartTotalEl.textContent = `₹${total}`;
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}


// Remove single item
function removeCartItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Clear cart
clearCartBtn.addEventListener('click', () => {
  cart = [];
  updateCart();
});

// Checkout
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }
  alert('Proceeding to checkout. (Integrate payment system next)');
});

// ===== Open Checkout Page in New Window =====
const checkoutBtnEl = document.getElementById('checkoutBtn');

if (checkoutBtnEl) {
  checkoutBtnEl.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    // save cart temporarily in localStorage
    localStorage.setItem('mallow_cart', JSON.stringify(cart));

    // open checkout page in a new tab/window
    window.open('checkout.html', '_blank');
  });
}



// ====== ORDER & PAYMENT SECTION ======
const orderForm = document.getElementById('orderForm');
const orderItemsContainer = document.getElementById('orderItems');
const orderTotal = document.getElementById('orderTotal');

function renderOrderSummary() {
  orderItemsContainer.innerHTML = '';
  let total = 0;
  if (cart.length === 0) {
    orderItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    orderTotal.textContent = '₹0';
    return;
  }
  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    const p = document.createElement('p');
    p.textContent = `${item.title} × ${item.qty} = ₹${subtotal}`;
    orderItemsContainer.appendChild(p);
    total += subtotal;
  });
  orderTotal.textContent = `₹${total}`;
}


// Update order summary whenever user visits the section
document.getElementById('orderForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value.trim();
  const state = document.getElementById('state').value.trim();
  const pincode = document.getElementById('pincode').value.trim();
  const country = document.getElementById('country').value.trim();
  const payment = document.getElementById('payment').value;

  if (!name || !email || !phone || !address || !city || !state || !pincode || !country || !payment) {
    alert('Please fill in all required fields.');
    return;
  }

  alert(`Thank you ${name}! Your order has been placed successfully.`);
  localStorage.removeItem('mallow_cart');
  window.close();
});



// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const responseMsg = document.getElementById('responseMsg');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    responseMsg.textContent = 'Please fill in all fields.';
    return;
  }

  // Simulated form submit
  responseMsg.textContent = `Thank you, ${name}! Your message has been sent.`;
  contactForm.reset();
});