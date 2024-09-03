import React, { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Consumir la API de pizzas
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              img={pizza.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
