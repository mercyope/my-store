import { useEffect, useState } from "react";
import Products from "./Products";

const url = "https://dummyjson.com/products?limit=80";
const FetchData = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const fetchV = async () => {
    setLoad(true);
    const response = await fetch(url);
    if (!response) {
      alert("mercy, you have error!!!!!");
    }
    const result = await response.json();
    setData(result.products);
    setLoad(false);
    console.log(result.products);
  };
  useEffect(() => {
    fetchV();
  }, []);
  return (
    <>
      <div style={{ marginTop: "90px" }}>
        <div style={{ margin: "auto", width: "100%" }}>
          {load && <h1>Loading........................</h1>}
          {!load && <Products products={data} />}
        </div>
      </div>
    </>
  );
};

export default FetchData;
