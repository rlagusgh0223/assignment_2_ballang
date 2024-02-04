// const TMDB_ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    // Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};

const getProducts = async (type) => {
  const endpoints = {
    homeproduct:
      "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products",
  };
  const response = await fetch(endpoints, options);
  const data = await response.json();
  const products = data.results;
  console.log(data);
  return products;
};

const getProduct = async (productId) => {
  const endpoint = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products/${productId}?language=ko-KR`;
  const response = await fetch(endpoint, options);
  const data = await response.json();

  return data;
};

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
