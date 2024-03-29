import React from 'react';
import style from './style.module.scss';

type Props = {
  children: React.ReactNode;
} & React.ComponentProps<'button'>;

function Button({ children }: Props) {
  return (
    <button className={style.button}>
      {children}
    </button>
  );
}

export default Button;
