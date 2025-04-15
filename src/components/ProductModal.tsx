import React from "react";
import { Product } from "../data/menuData";
import "style/ProductModal.css";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={product.available ? "available" : "not-available"}>
            {product.available ? "Available" : "Not Available"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
