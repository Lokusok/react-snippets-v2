import React from 'react';
import style from './style.module.scss';

import cn from 'classnames';

type Props = {
  multiline?: boolean;
} & React.ComponentProps<'input'> & React.ComponentProps<'textarea'>;

function Input(props: Props) {
  if (props.multiline) {
    return (
      <textarea {...props} className={cn(style.input, style.textarea)}></textarea>
    )
  }

  return (
    <input {...props} className={style.input} type="text" />
  );
}

export default Input;
