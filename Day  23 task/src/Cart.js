import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
