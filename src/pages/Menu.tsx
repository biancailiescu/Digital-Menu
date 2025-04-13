import React, { useState } from "react";
import { menuData, Product } from "../data/menuData"; 
import ProductCard from "../components/ProductCard"; 
import Dropdown from "../components/Dropdown"; 
import CartSummary from "../components/CartSummary"; 
import "style/Menu.css"; 

interface CartItem extends Product {
  quantity: number; 
}

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  // Extract category names from menuData
  const categories = menuData.map((category) => category.category);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? menuData.find((category) => category.category === selectedCategory)?.products || []
    : menuData.flatMap((category) => category.products);

  const handleUpdateCart = (product: Product, quantity: number) => {
    setCartItems((prevCartItems) => {
      if (quantity === 0) {
        return prevCartItems.filter((item) => item.id !== product.id); 
      }

      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity } : item
        );
      }

      return [...prevCartItems, { ...product, quantity }]; 
    });
  };

  return (
    <div className="menu-container">
     
      <h1 className="menu-title">Menu</h1>

      <Dropdown options={categories} onSelect={setSelectedCategory} />

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            cartQuantity={
              cartItems.find((item) => item.id === product.id)?.quantity || 0
            }
            onUpdateCart={handleUpdateCart}
          />
        ))}
      </div>

      <button className="cart-button" onClick={() => setShowCart(!showCart)}>
        {showCart ? "Close Cart" : "View Cart"}
      </button>

      {showCart && <CartSummary cartItems={cartItems} />}
    </div>
  );
};

export default Menu;