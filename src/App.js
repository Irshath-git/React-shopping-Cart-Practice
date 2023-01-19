import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function App() {
  const products = [
    {
      id: 1,
      title: "Apple MacBook Air 2020",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664423222/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_0_cjayuw.png/mxw_1440,f_auto",
      price: 87900,
    },
    {
      id: 2,
      title: "Apple MacBook Air 2022",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1657282863/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256602_zp9dz9.png/mxw_1440,f_auto",
      price: 139390,
    },
    {
      id: 3,
      title: "Apple MacBook Pro 14",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663415676/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245232_0_pin6ch.png/mxw_1440,f_auto",
      price: 171500,
    },
    {
      id: 4,
      title: "Apple MacBook Pro 16 2021",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663415332/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245227_0_ton7gy.png/mxw_1440,f_auto",
      price: 228700,
    },
    {
      id: 5,
      title: "Apple 13‑inch MacBook Pro - Silver",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666277779/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/256712_0_y4ghxi.png/mxw_1440,f_auto",
      price: 65000,
    },
    {
      id: 6,
      title: "Apple MacBook Air with M2 chip",
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/719C6bJv8jL._SL1500_.jpg",
      price: 105500,
    },
  ];

  const [cartList, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [counter, setCounter] = useState(0);

  let addToCart = (product) => {
    setCart([...cartList, { ...product, quantity: 1 }]);
    setTotal(total + product.price);
  };

  let removeCart = (product) => {
    let itemIndex = cartList.findIndex((item) => product.id === item.id);
    cartList.splice(itemIndex, 1);
    setCart([...cartList]);
    setTotal(total - product.price * product.quantity);
  };

  const incQuantity = (cartItem) => {
    let itemIndex = cartList.findIndex((item) => cartItem.id === item.id);
    cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1;
    setCart([...cartList]);
    setTotal(total + cartItem.price);
  };

  const decQuantity = (cartItem) => {
    let itemIndex = cartList.findIndex((item) => cartItem.id === item.id);
    cartList[itemIndex].quantity = cartList[itemIndex].quantity - 1;
    setCart([...cartList]);
    setTotal(total - cartItem.price);
    // if (counter !== 0) {
    //   isDisabled = true;
    // }
  };

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Header />
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                {products.map((product) => {
                  return (
                    <Card
                      product={product}
                      addToCart={addToCart}
                      cartList={cartList}
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-lg-3 ms-0 border shadow" id="cart">
              <h3 className="text-center">Cart</h3>
              <Cart
                cartList={cartList}
                removeCart={removeCart}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
              />
              <h3 className="text-center">Total : Rs. {total}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
