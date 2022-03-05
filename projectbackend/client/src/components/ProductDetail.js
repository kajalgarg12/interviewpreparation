import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams();

  const getSingleProduct = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  });

  const navigate = useNavigate();

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/${id}`);
    navigate("/");
  };

  return (
    <div className="container" style={{ width: "550px" }}>
      <h1>Product Detail</h1>
      <div className="single-product-info">
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
          style={{ height: "325px", padding: "5px" }}
        />
        <h2 className="card-title my-3">{product.name}</h2>
        <p className="card-text">{product.description}</p>
        <p className="product-price-info card-text">
          <b>$ {product.price}</b>
        </p>
        <p className="card-text">{product.category}</p>
        <div>
          <Link className="btn btn-warning m-2" to={`/${product.id}/update`}>
            Update
          </Link>
          <button
            type="button"
            className="btn btn-danger m-2"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
