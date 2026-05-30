const BASE_URL = "https://v2.api.noroff.dev";
const ENDPOINT = `${BASE_URL}/gamehub`;

export async function getProducts() {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      return (await response.json()).data;
    }
    return {
      error: "Unknown error",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Unknown error",
    };
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(ENDPOINT + "/" + id);
    if (response.ok) {
      return (await response.json()).data;
    }
    return {
      error: "Unknown error",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Unknown error",
    };
  }
}
