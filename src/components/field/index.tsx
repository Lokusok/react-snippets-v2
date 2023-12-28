import React from 'react';
import style from './style.module.scss';

type Props = {
  children: React.ReactNode;
};

function Field({ children }: Props) {
  return (
    <div className={style.field}>
      {children}
    </div>
  );
}

export default Field;
