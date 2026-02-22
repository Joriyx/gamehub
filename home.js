import { getProducts } from "./api.js";
import { createProductCard } from "./productCard.js";
import { refreshCartCounter } from "./cart.js";

refreshCartCounter();

async function refreshPopularList() {
  const popularList = document.getElementById("popular_list");
  if (!popularList) {
    return;
  }
  popularList.innerHTML = "";
  const products = await getProducts();
  if (products.length === 0) {
    popularList.innerHTML = "No products found";
    return;
  }

  const productPopularCount = Math.min(3, products.length);

  for (let i = 0; i < productPopularCount; i++) {
    popularList.appendChild(createProductCard(products[i], "./"));
  }
}

document.onreadystatechange = refreshPopularList;
