import React from 'react';
import style from './style.module.scss';

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default Container;