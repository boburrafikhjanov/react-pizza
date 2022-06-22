import React, { useState } from 'react';

import { AddIcon } from '../svg';

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  //console.log(sizes);
  const typePizza = ['тонкое', 'традиционное'];

  const [pizzaCount, setPizzaCount] = useState(0);

  const onClickAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeID, i) => (
            <li
              key={i}
              onClick={() => setActiveType(typeID)}
              className={activeType === typeID ? 'active' : ''}>
              {typePizza[typeID]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? 'active' : ''}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button onClick={onClickAdd} className="button button--outline button--add">
          <AddIcon />
          <span>Добавить</span>
          <i>{pizzaCount}</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
