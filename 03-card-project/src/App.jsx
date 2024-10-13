import BasicExample from "./components/Bcard/Bcard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Bcard/Bcard.css"

import React, { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  async function getData() {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const response = await data.json();
      console.log(response.products);
      setProduct(response.products);
    } catch (error) {
      console.log(error);
      setErr(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <h1>Loadinnnnnggg...</h1>}
      {product && (
        <div className="cards-container">
          {product.map((item) => {
            return <BasicExample imageUrl={item.images[0]} title={item.title}/>;
          })}
        </div>
      )}
      {err && <h1>error aagya</h1>}
    </>
  );
};

export default App;
