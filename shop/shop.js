import { getProducts } from "../api.js";
import { createProductCard } from "../productCard.js";

async function refreshPopularList() {
  const popularList = document.getElementById("list");
  const genreList = document.getElementById("genre_list");
  if (!popularList) {
    return;
  }
  popularList.innerHTML = "";
  const products = await getProducts();
  if (products.length === 0) {
    popularList.innerHTML = "No products found";
    return;
  }
  const genres = ["All"];
  const query = new URLSearchParams(window.location.search);
  const genreFilter = query.get("genre");

  for (let i = 0; i < products.length; i++) {
    if (!genres.includes(products[i].genre)) {
      genres.push(products[i].genre);
    }
    if (
      !genreFilter ||
      genreFilter === "All" ||
      genreFilter === products[i].genre
    ) {
      popularList.appendChild(createProductCard(products[i]));
    }
  }
  genreList.innerHTML = "";
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const a = document.createElement("a");
    a.className = "genre";
    if (genre === genreFilter) {
      a.classList.add("active");
    }
    a.textContent = genre;
    a.href = "?genre=" + genre;
    genreList.appendChild(a);
  }
}

document.onreadystatechange = refreshPopularList;
