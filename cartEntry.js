function createCartEntry(product) {
  const article = document.createElement("article");
  article.className = "cart_entry";

  const imgDiv = document.createElement("div");
  imgDiv.className = "shoping_cart_image";
  article.appendChild(imgDiv);

  const img = document.createElement("img");
  img.src = product.image.url;
  img.alt = product.image.alt;
  imgDiv.appendChild(img);

  const productInfoDiv = document.createElement("div");
  imgDiv.className = "product_info";
  article.appendChild(productInfoDiv);

  const h2 = document.createElement("h2");
  h2.textContent = product.title;
  productInfoDiv.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = product.price;
  productInfoDiv.appendChild(p);

  const button = document.createElement("button");
  button.textContent = "Remove";
  productInfoDiv.appendChild(button);
}
