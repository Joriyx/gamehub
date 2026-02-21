export function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "product_card";

  const favoriteIcon = document.createElement("a");
  favoriteIcon.className = "heart";

  article.appendChild(favoriteIcon);

  const icon = document.createElement("img");
  icon.src = "/assets/icons/Heart.svg";
  if (product.favorite) {
    icon.src = "/assets/icons/Filled_Heart.svg";
  }
  icon.alt = "line art of a heart";
  icon.className = "icons";
  favoriteIcon.appendChild(icon);

  const productLink = document.createElement("a");
  productLink.href = "/product/index.html?id=" + product.id;
  productLink.className = "product_card_photo";
  article.appendChild(productLink);

  const productImage = document.createElement("img");
  productImage.src = product.image.url;
  productImage.alt = product.image.alt;
  productLink.appendChild(productImage);

  const h3 = document.createElement("h3");
  h3.textContent = product.title;
  h3.className = "product_card_name";
  article.appendChild(h3);

  const price = document.createElement("p");
  price.textContent = product.price;
  price.className = "product_card_price";
  article.appendChild(price);

  const button = document.createElement("a");
  button.href = "/product/index.html?id=" + product.id;
  button.className = "product_card_cta";
  button.textContent = "Shop Now";
  article.appendChild(button);

  return article;
}
