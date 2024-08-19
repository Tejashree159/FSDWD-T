import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
