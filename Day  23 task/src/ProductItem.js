import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <li className="product-item">
      <span>{product.name} - ${product.price}</span>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  );
};

export default ProductItem;
