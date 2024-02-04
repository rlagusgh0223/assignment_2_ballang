import React, { useEffect, useState } from "react";

function HomePage() {
  // 데이터를 저장할 상태 변수
  const [data, setData] = useState({ product: [] });

  console.log("useState", data);

  useEffect(() => {});

  // // 컴포넌트가 마운트될 때 데이터를 가져옴
  // useEffect(() => {
  //   // API 엔드포인트
  //   const url =

  //   // fetch를 사용하여 데이터 가져오기
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error:", error));
  // });

  console.log("after", data);
  return <div>HomePage</div>;
}

export default HomePage;
