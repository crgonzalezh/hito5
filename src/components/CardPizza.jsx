import React from 'react';

const CardPizza = ({ name, ingredients, price, img }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          {ingredients.map((ingredient, index) => (
            <li className="list-group-item" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <a href="#" className="btn btn-primary">Añadir al carrito</a>
      </div>
    </div>
  );
};

export default CardPizza;

