import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
