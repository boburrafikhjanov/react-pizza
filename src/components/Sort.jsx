import React, { useState } from 'react';

import { TopIcon } from './svg';

function Sort() {
  const [showList, setShowList] = useState(false);
  const [selectedList, setSelectedList] = useState(0);

  const onSelectedItem = (i) => {
    setSelectedList(i);
    setShowList(false);
  };

  const list = ['популярности', 'цене', 'алфавиту'];

  return (
    <div className="sort">
      <div onClick={() => setShowList(!showList)} className="sort__label">
        <TopIcon />
        <b>Сортировка по:</b>
        <span>{list[selectedList]}</span>
      </div>
      {showList && (
        <div className="sort__popup">
          <ul>
            {list.map((name, i) => (
              <li
                key={i}
                onClick={() => onSelectedItem(i)}
                className={selectedList === i ? 'active' : ''}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
