import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import Page from "../../components/Page";

function ProductDetailPage() {
  const { productId } = useParams();
  const { isLoggedIn } = useAuth();
  const [product, setProduct] = useState(null);

  //   useEffect(() => {
  //     api.products.get;
  //   });
  // 컴포넌트가 마운트될 때 데이터를 가져옴
  useEffect(() => {
    // fetch를 사용하여 데이터 가져오기
    fetch(
      "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products"
    )
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((product) => setProduct(product))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Page>
      {Array.isArray(product) &&
        product.map((d) => console.log("ProductDetailPage", d.id))}
      ProductDetailPage
    </Page>
  );
}

export default ProductDetailPage;
