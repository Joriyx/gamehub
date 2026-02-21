const BASE_URL = "https://v2.api.noroff.dev";
const ENDPOINT = `${BASE_URL}/gamehub`;

export async function getProducts() {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      return (await response.json()).data;
    }
  } catch (error) {}
}

export async function getProduct(id) {
  try {
    const response = await fetch(ENDPOINT + "/" + id);
    if (response.ok) {
      return (await response.json()).data;
    }
  } catch (error) {}
}
