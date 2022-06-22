import React, { useState, useEffect } from 'react';
import { Categories, Sort, PizzaBlock, Skeleton } from '../components/index';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoadin] = useState(true);

  useEffect(() => {
    fetch(`https://62a233eccc8c0118ef5ed0f8.mockapi.io/items`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoadin(false);
        window.scrollTo(0, 0);
      });
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
