import React from "react";
import ProductListItem from "../ProductListItem";
import styles from "./ProductList.module.scss";

function ProductsList({ products }) {
  // console.log("ProductsList", products);
  return (
    <section className={styles.wrapper}>
      {/* <h2 className={styles.listTitle}>{listTitle}</h2> */}
      <ul>
        {Array.isArray(products) &&
          products.map((product) => (
            // console.log("ProductsList", product)
            <li key={product.id}>
              {/* {console.log("ProductsList", product)} */}
              <ProductListItem product={product} />
              {product.brandnm_kr}
              {product.standard_price}
            </li>
          ))}
      </ul>
    </section>
  );
}

export default ProductsList;
