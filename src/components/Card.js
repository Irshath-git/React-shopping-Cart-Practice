import React from "react";

function Card({ product, addToCart, cartList }) {
  return (
    <div className="col-9 col-sm-12 col-md-6 col-lg-4 mb-3">
      <div class="card shadow" style={{ width: "17rem" }} id="card">
        <img src={product.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">Rs. {product.price}</p>
          <button
            disabled={cartList.some((item) => item.id === product.id)}
            href="#"
            class="btn btn-primary d-md-flex justify-content-md-center"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
