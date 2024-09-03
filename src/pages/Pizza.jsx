import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    // Consumir la API de una pizza específica
    fetch('http://localhost:5000/api/pizzas/p001')  // ID fijo por ahora
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error('Error fetching pizza:', error));
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.name}</h2>
          <p>Precio: ${pizza.price.toLocaleString()}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{pizza.description}</p>
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
