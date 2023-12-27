import React from 'react';
import style from './style.module.scss';

import cn from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: 'small' | 'medium';
};

function Field({ children, className, variant = 'small' }: Props) {
  return (
    <div className={cn(style.field, className, { [style[variant]]: variant })}>
      {children}
    </div>
  )
}

export default Field;
