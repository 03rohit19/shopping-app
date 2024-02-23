import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

const ProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchProducts();
    }
  }, [id]);
  const { image, title, category, description, rating } = data || {};
  const { rate, count } = rating || {};

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
        <div className="md:flex mt-28">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={image}
              alt={title}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {category}
            </div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Rating : {rate}
            </p>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Total sold : {count}
            </p>
            <p className="mt-2 text-slate-500">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
