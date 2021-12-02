import React from "react";
import data from "../data";
import Rating from "../components/Rating";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ProductScreen(props) {
  const { id } = useParams();
  const product = data.products.find((x) => x._id === id);
  if (!product) {
    return <div><h1> Product Not Found </h1></div>;
  } else {
    return (
      <div>
          <Link to="/"><button className="danger">Back To Result</button></Link>
        <div className="row top">
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name}></img>
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating rating={product.rating} numReviews={product.numReviews}>
                  {product.name}
                </Rating>
              </li>
              <li>Price ${product.price}</li>
              <li>
                Description:
                <p>{product.descriptions}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">{product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success"> In Stock ({product.countInStock})</span>
                      ) : (
                        <span className="error">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
