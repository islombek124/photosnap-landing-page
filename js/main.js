const toggleBtn = document.querySelector('.toggleBtn'),
  mobileMenu = document.getElementById('mobile-menu'),
  mobileMenuItems = mobileMenu.querySelectorAll('.content .menus a');

toggleBtn.onclick = () => {
  mobileMenu.classList.toggle('active');
  toggleBtn.classList.toggle('active');

  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

for (const iterator of mobileMenuItems) {
  iterator.onclick = () => {
    mobileMenu.classList.add('hidden');
  }
}


let inp = document.querySelector('#toggle'),
  texts = document.querySelectorAll('.switchPrices .text'),
  a = document.querySelectorAll('#prices .content .basic-prices .prices .price .priceP h3'),
  b = document.querySelectorAll('#prices .content .basic-prices .prices .price .priceP span');

inp.onclick = e => {
  if (e.target.checked === true) {
    inp.classList.add('active');
    texts[1].classList.add('active');
    texts[0].classList.remove('active');
    a[0].innerText = '$190.00';
    a[1].innerText = '$390.00';
    a[2].innerText = '$990.00';
    for (let i = 0; i < b.length; i++) { b[i].innerText = 'per year' };
  } else {
    inp.classList.remove('active');
    texts[1].classList.remove('active');
    texts[0].classList.add('active');
    a[0].innerText = '$19.00';
    a[1].innerText = '$39.00';
    a[2].innerText = '$99.00';
    for (let i = 0; i < b.length; i++) { b[i].innerText = 'per month' };
  }
};