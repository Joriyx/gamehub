import { getCart, refreshCartCounter, refreshCartTotal } from "../cart.js";
import { createCartEntry } from "../cartEntry.js";

refreshCartCounter();
refreshCartTotal();

async function refreshCartList() {
  const cartList = document.getElementById("cart_list");
  if (!cartList) {
    return;
  }
  cartList.innerHTML = "";
  const products = getCart();
  if (products.length === 0) {
    cartList.innerHTML = "No products in cart";
    return;
  }

  for (let i = 0; i < products.length; i++) {
    cartList.appendChild(createCartEntry(products[i]));
  }
}

document.onreadystatechange = refreshCartList;
