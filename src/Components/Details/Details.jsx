import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

  const allProducts = useLoaderData();
  const { id } = useParams();
  const selectedProduct = allProducts.find((pro) => pro._id == id);

  const { name, image, brandName, type, price, shortDescription, rating } = selectedProduct;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-orange-400">{name}</h1>
            <p className="py-6">{shortDescription}</p>
            <p className="py-4 text-2xl font-bold">{price}</p>
            <p className="py-4 text-2xl font-bold">{rating}</p>
            <button className="btn bg-orange-400  text-white border-orange-500 hover:bg-opacity-0 hover:border-orange-500">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
