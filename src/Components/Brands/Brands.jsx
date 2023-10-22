import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="mt-32 mb-32">
      <h1 className="text-center text-5xl font-bold mb-16 text-green-100">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto  gap-10 ">
        {brands.map((service) => (
          <Service key={service.id} service={service}></Service>
          <Brand></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;