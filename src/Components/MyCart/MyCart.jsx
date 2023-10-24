import { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";

const MyCart = () => {

    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/cart_products")
          .then((res) => res.json())
          .then((data) => setCarts(data));
      }, []);
  return (
    <div>
      <div className="mt-32 mb-32">
        <h1 className="text-center text-5xl font-bold mb-16 text-orange-400">
          Your Added Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto  gap-10 ">
          {carts.map((product) => (
           <SingleCart key={product._id} product={product}></SingleCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
