import React from 'react';
import { Header, Categories, Sort, Card } from './components';

import './scss/app.scss';

import pizzaData from './mock-data/pizzas.json';

let url = 'https://62a233eccc8c0118ef5ed0f8.mockapi.io/items';

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((arr) => {
    console.log(arr);
  });

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaData.map((obj) => (
              <Card key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
