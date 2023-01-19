import React, { useState } from "react";

function Cart({ cartList, removeCart, incQuantity, decQuantity }) {
  // const [disabled, setDisabled] = useState(true);
  return (
    <>
      <ol class="list-group list-group-numbered">
        {cartList.map((item) => {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{item.title}</div>
                Rs. {item.price}
                <button
                  className="btn btn-success fw-bold m-1"
                  onClick={() => incQuantity(item)}
                >
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  disabled={item.quantity === 0 ? true : false}
                  className="btn btn-danger fw-bold m-1"
                  onClick={() => decQuantity(item)}
                >
                  -
                </button>
              </div>
              <button
                class="badge bg-primary rounded-pill"
                onClick={() => removeCart(item)}
              >
                x
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default Cart;
