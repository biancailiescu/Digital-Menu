import React from "react";
import { Product } from "../data/menuData"; 
import "style/CartSummary.css"; 

interface CartItem extends Product {
  quantity: number; 
}

interface CartSummaryProps {
  cartItems: CartItem[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Subtotal: ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartSummary;