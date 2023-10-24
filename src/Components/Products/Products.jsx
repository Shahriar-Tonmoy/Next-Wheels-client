import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import NoProducts from "../NoProducts/NoProducts";

const Products = () => {
  const allProducts = useLoaderData();
  const { name } = useParams();

  const clickedBrandProducts = allProducts.filter(product => product.brandName.toLowerCase() === name.toLowerCase());

  

  console.log(clickedBrandProducts);
  return (
    <div>
      <div className="mt-32 mb-32">
      <h1 className="text-center text-5xl font-bold mb-16 text-orange-400">Products</h1>
      <div className="grid grid-cols-1 container mx-auto  gap-10 ">
        {!clickedBrandProducts.length ? <NoProducts></NoProducts> : clickedBrandProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
