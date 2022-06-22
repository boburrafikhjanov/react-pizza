import React from 'react';

import cls from './NotfoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={cls.root}>
      <h1>
        <span>😕</span>
        <br />
        Ни чего не найдено
      </h1>
      <p className={cls.description}>
        К сожалению данная страница отсутствует в нашем интернет-магазине.
      </p>
    </div>
  );
};

export default NotFoundBlock;
