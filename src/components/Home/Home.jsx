import { useEffect, useState } from "react";
import Products from "./Products";
import Header from "../Header/Header";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl ">
        <div className="flex flex-wrap justify-center gap-4 ">
          {product.map((x) => (
            <Products key={x.id} data={x} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
