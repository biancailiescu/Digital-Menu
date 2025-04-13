import React, { useState } from "react";
import { menuData } from "../data/menuData";
import CategoryFilter from "../components/CategoryFilter";
import "style/Menu.css";

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="container">
      {/* Title */}
      <h1 className="title">Menu</h1>

      {/* Categories */}
      <div className="categories">
        {menuData.map((item) => (
          <button
            key={item.category}
            onClick={() => setSelectedCategory(item.category)}
            className={`categoryButton ${
              selectedCategory === item.category ? "selected" : ""
            }`}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* Products */}
      {selectedCategory && (
        <div className="products">
          <h2>{selectedCategory}</h2>
          <ul>
            {menuData
              .find((item) => item.category === selectedCategory)
              ?.products.map((product) => (
                <li key={product.id} className="productItem">
                  {product.name} - ${product.price}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
