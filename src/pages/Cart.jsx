import React, { useState } from 'react';
import { pizzaCart } from '../pizzas';  // Asegúrate de que la ruta sea correcta

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart
      .map(item => 
        item.id === id && item.quantity > 0 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-md-4">
            <img src={item.img} alt={item.name} className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h5>{item.name}</h5>
            <p>Precio: ${item.price.toLocaleString()}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)} className="btn btn-secondary">+</button>
            <button onClick={() => decreaseQuantity(item.id)} className="btn btn-secondary">-</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-success">Pagar</button>
    </div>
  );
};

export default Cart;
