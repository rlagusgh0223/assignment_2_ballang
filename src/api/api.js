// const { default: productsAPI } = require("./products/products.api");
import productsAPI from "./products/products.api";

const api = {
  products: productsAPI,
};

export default api;
