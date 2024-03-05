'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('.hidden')) closeModal();
});

btnsOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Sliding Sign Up
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.toggle('active');
});

// -----------------------------------------------------------------------

loginBtn.addEventListener('click', () => {
  container.classList.toggle('active');
});

// DOM for Cards - 1. Featuring Cards.
const featureCards = document.querySelector('.feature-cards');

// Function for Cards DOM Manipulation.
const cards = () => {
  const h1 = [
    { name: 'MAHARAJA BURGER', img: 'Images/83565509.webp', price: 119 },
    { name: 'VALUE SNACKER', img: '/Images/value.jpg', price: 259 },
    { name: 'BOX MEALS', img: '/Images/box meal.jpg', price: 259 },
    { name: 'PERI PERI CHICKEN', img: '/Images/PERI.jpg', price: 259 },
    { name: 'VALUE SNACKER', img: '/Images/value.jpg', price: 259 },
    { name: 'BOX MEALS', img: '/Images/box meal.jpg', price: 259 },
  ];
  featureCards.innerHTML = '';
  h1.map((cur, i) => {
    const card = `<div class="card">
    <div class="info">
      <h1>${cur.name}</h1>
      <img id="peri" src="${cur.img}" alt="pri peri" />
      <p id="p">₹${cur.price}.00</p>
      <button class="headline-btn btn-p">Add to Cart</button>
      <i class="bi bi-dash-circle-fill minus${i}"></i>
      <span id="span${i}">0</span>
      <i class="bi bi-plus-circle-fill plus${i}"></i>
    </div>
    </div>`;
    // console.log(card);
    featureCards.insertAdjacentHTML('beforeend', card);

    // 2. Add to cart
    const minus = document.querySelector(`.minus${i}`);
    const plus = document.querySelector(`.plus${i}`);
    const num = document.querySelector(`#span${i}`);
    let count = 0;
    // Add to cart numbering.
    minus.addEventListener('click', () => {
      if (count > 0) count--;
      num.textContent = count;
    });
    plus.addEventListener('click', () => {
      count++;
      num.textContent = count;
    });
  });
};
cards();

// -----------------------------------------------------------------------

// Footer
const col = document.querySelector('.footer-col');
const footer = () => {
  const data = [
    { head: 'company', sub0: 'about us' },
    { head: 'get help', sub0: 'our services' },
    { head: 'online shop', sub0: 'privacy policy' },
    { head: 'follow us', sub0: 'affiliate program' },
  ];
  data.map((cur, i) => {
    const el = `<div class="footer-col">
        <h4>${cur.head}</h4>
        <ul>
          <li><a href="#">${cur.sub0}</a></li>
        </ul>
      </div> `;
    console.log(el);
  });
};
footer();
