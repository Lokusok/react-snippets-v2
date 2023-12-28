import React from 'react';

import style from './style.module.scss';
import cn from 'classnames';

import { FaPlus } from 'react-icons/fa6';

type Props = {
  variant?: 'short' | 'long';
} & React.ComponentProps<'button'>;

function AddBtn({ variant = 'short', ...props }: Props) {
  const options = {
    classNames: cn(style.button, style[variant]),
  };

  return (
    <button {...props} className={options.classNames}>
      <FaPlus />
    </button>
  );
}

export default AddBtn;
