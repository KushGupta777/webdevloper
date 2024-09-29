document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
  
    const cartCounter = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        cartCount++;
        cartCounter.textContent = cartCount;
      });
    });
  });
  