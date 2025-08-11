import React from "react";

import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {

  const calculateTotalAmount = () => {
    
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };


 

  const handleCheckoutClick = () => {
    window.alert("The website is under development.");
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div>
      
        Cart Page
      </div>
      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      ></div>
      <div className="continue_shopping_btn">
        <button
          className="get-started-button1"
          onClick={(e) => handleContinueShopping(e)}
        >
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutClick}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;