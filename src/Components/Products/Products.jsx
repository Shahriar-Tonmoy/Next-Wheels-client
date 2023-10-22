import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
    const allBrands = useLoaderData();
    const {id} = useParams();

    console.log(id);
    return (
        <div>
            
        </div>
    );
};

export default Products;