import React, { useContext, useRef } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems, totalPrice, setCartItems } = useContext(Context);
  const orderRef = useRef(null);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    if (orderRef) {
      orderRef.current.textContent = "Ordering...";
    }
    setTimeout(() => {
      console.log("Order placed!");
      setCartItems([]);

      if (orderRef) {
        orderRef.current.textContent = "Place Order";
      }
    }, 3000);
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
      {cartItems.length > 0 && (
        <div className="order-button">
          <button ref={orderRef} onClick={placeOrder}>
            Place Order
          </button>
        </div>
      )}
    </main>
  );
}
