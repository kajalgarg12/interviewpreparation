import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { Button } from 'bootstrap'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    setProducts(response.data);
  };

  useEffect(() => {
    getProduct();
     },[]);

  const navigate = useNavigate();

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/${id}/`);
    navigate("/");
  };

  return (
    <div className="container my-3">
      <h1>Show All Products</h1>
      <div className="product-card-info row my-3">
        {products.map((product, index) => {
          return (
            <div className="col-md-4 my-3" key={index}>
              <div className="card ">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "250px" }}
                />
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p className="product-price-info card-text">
                    <b>$ {product.price}</b>
                  </p>
                  <p className="card-text">{product.category}</p>
                </div>
                <div>
                  <Link className="btn btn-info m-2" to={`/${product.id}`}>
                    Details
                  </Link>
                  <Link
                    className="btn btn-warning m-2"
                    to={`/${product.id}/update`}
                  >
                    Update
                  </Link>
                  {/* <Link className='btn btn-danger m-2' onClick={() => deleteProduct(product.id)} to=''>Delete</Link> */}
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
        })}
      </div>
    </div>
  );
};

export default ShowProducts;
