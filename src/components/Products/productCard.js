import React from 'react';
import './product.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.productImageUrl} alt={product.name} />
      </div>
      <h4 className="product-price">${product.priceTotal}</h4>
      <div className="product-details">
        <h3>{product.name}</h3>
        <button className="add-button">Add</button>
      </div>
    </div>
  );
};

export default ProductCard;
