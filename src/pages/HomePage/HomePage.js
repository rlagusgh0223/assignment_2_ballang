import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Page from "../../components/Page";
import ProductsList from "../../components/ProductsList";

function HomePage() {
  // 데이터를 저장할 상태 변수
  const [data, setData] = useState();
  // const [data, setData] = useState({ homeproduct: [] });

  // console.log("useState", data);

  // useEffect(() => {
  //   api.products
  //     .getProducts("homeproduct")
  //     .then((homeproduct) => setData(homeproduct));
  //   // Promise.all([api.products.getProducts("homeproduct")]).then(
  //   //   ([homeproduct]) => setData({ homeproduct })
  //   // );
  // }, []);

  // 컴포넌트가 마운트될 때 데이터를 가져옴
  useEffect(() => {
    // fetch를 사용하여 데이터 가져오기
    fetch(
      "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products"
    )
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // console.log("after", data);
  return (
    <Page>
      <h1>BALLANG</h1>
      {/* {console.log("HomePage", data)} */}
      {/* {Array.isArray(data) && data.map((d) => console.log("HomePage", d.id))} */}
      <ProductsList products={data} />
    </Page>
  );
}

export default HomePage;
