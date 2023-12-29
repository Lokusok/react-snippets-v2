import React from 'react';
import style from './style.module.scss';

import { IoCloseCircle } from 'react-icons/io5';

import cn from 'classnames';

type Props = {
  className?: string;
} & React.ComponentProps<'button'>;

function CloseBtn({ className, ...props }: Props) {
  return (
    <button {...props} className={cn(style.button, className)}>
      <IoCloseCircle size={35} />
    </button>
  );
}

export default CloseBtn;
