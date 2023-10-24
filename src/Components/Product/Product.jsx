import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, image, brandName, type, price, shortDescription, rating } =
    product;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-orange-200">
      <figure className="w-1/2">
        <img  
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-orange-400">{name}- {brandName}</h2>
        <p>{shortDescription}</p>
        <p className="font-semibold">Type - {type}</p>
        <p className="font-semibold">Price - {price}</p>
        <p className="font-semibold">Rating - {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}><button className="btn bg-orange-400 text-white hover:bg-orange-400">Details</button></Link>
          <button className="btn bg-orange-400 text-white hover:bg-orange-400">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
