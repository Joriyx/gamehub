import { getProducts } from "./api.js";
import { createProductCard } from "./productCard.js";

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

  for (let i = 0; i < products.length; i++) {
    popularList.appendChild(createProductCard(products[i]));
  }
}

document.onreadystatechange = refreshPopularList;
