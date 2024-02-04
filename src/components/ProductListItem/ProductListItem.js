import React from "react";
import { useAuth } from "../../contexts/auth.context";
import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";

function ProductListItem({ product }) {
  const { isLoggedIn } = useAuth();
  // console.log("확인");
  return (
    <Link to={`/product/${product.id}`}>
      {/* {console.log("확인", product.img_i)} */}
      <img src={product.img_i} alt={product.title} />
      {isLoggedIn && <LikeButton product={product} />}
    </Link>
  );
}

export default ProductListItem;
