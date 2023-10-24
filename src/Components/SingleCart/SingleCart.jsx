const SingleCart = ({ product }) => {
    const { _id, name, image, brandName, type, price, shortDescription, rating } = product;

  return (
    <div className="card card-side bg-base-100 shadow-xl border-2 border-orange-400">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-orange-400 font-semibold">{name}</h2>
        <p className="font-extrabold">{brandName}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
