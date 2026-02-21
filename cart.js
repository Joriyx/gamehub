export function addToCart(product) {
  const cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    if (element.id === product.id) {
      return;
    }
  }
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

export function removeFromCart(id) {
  const cart = getCart().filter((product) => {
    return product.id != id;
  });
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

export function clearCart() {
  sessionStorage.removeItem("cart");
}

export function getCart() {
  const cart = sessionStorage.getItem("cart");
  if (!cart) {
    return [];
  }

  return JSON.parse(cart);
}
