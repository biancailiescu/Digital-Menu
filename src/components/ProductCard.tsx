import React from "react";
import { useState } from "react";
import { Product } from "../data/menuData"; 
import "style/ProductCard.css"; 

interface ProductCardProps extends Product {
    onUpdateCart: (product: Product, quantity: number) => void; 
    cartQuantity: number; 
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    description,
    price,
    available,
    onUpdateCart,
    cartQuantity,
  }) => {
    const [isAvailable, setIsAvailable] = useState<boolean>(available); 
  
    const handleToggleAvailability = () => {
      setIsAvailable((prevState) => !prevState); 
    };
  
    return (
      <div className="product-card">
        <h3 className="product-name">{name}</h3>
  
        <p className="product-description">{description}</p>
  
        <p className="product-price">${price.toFixed(2)}</p>
  
        <span
          className={`availability-indicator ${isAvailable ? "available" : "not-available"}`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </span>

        <div className="availability-toggle">
          <label>
            <input
              type="checkbox"
              checked={isAvailable}
              onChange={handleToggleAvailability}
            />
            Toggle Availability
          </label>
        </div>
 
        {isAvailable && (
          <div className="cart-controls">
            {cartQuantity > 0 ? (
              <>
                <button
                  className="quantity-button"
                  onClick={() => onUpdateCart({ id, name, description, price, available }, cartQuantity - 1)}
                >
                  -
                </button>
                <span className="quantity-display">{cartQuantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => onUpdateCart({ id, name, description, price, available }, cartQuantity + 1)}
                >
                  +
                </button>
              </>
            ) : (
              <button
                className="add-to-cart-button"
                onClick={() => onUpdateCart({ id, name, description, price, available }, 1)}
              >
                Add to Order
              </button>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default ProductCard;