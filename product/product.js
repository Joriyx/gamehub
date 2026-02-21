function refreshProductInfo(product) {
  const article = document.getElementById("product");
  if (!article) {
    return;
  }

  const productDetail = document.createElement("section");
  productDetail.className = "product_detail";
  article.appendChild(productDetail);

  const h1 = document.createElement("h1");
  h1.textContent = product.title;
  productDetail.appendChild(h1);

  const h2 = document.createElement("h2");
  h2.textContent = product.genre;
  productDetail.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = product.description;
  p.className = "product_description";
  productDetail.appendChild(p);

  const tagContainer = document.createElement("div");
  for (let i = 0; i < product.tags.length; i++) {
    const tag = product.tags[i];
    const span = document.createElement("span");
    span.textContent = "#" + tag;
    tagContainer.appendChild(span);
  }
  productDetail.appendChild(tagContainer);

  const price = document.createElement("p");
  price.textContent = product.price;
  price.className = "price";
  productDetail.appendChild(price);

  const button = document.createElement("button");
  button.textContent = "Add to cart";
  productDetail.appendChild(button);

  const productImage = document.createElement("section");
  productImage.className = "product_images";
  article.appendChild(productImage);

  const img = document.createElement("img");
  img.className = "big";
  img.src = product.image.url;
  img.alt = product.image.alt;
  productImage.appendChild(img);
}
