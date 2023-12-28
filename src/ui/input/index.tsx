import React from 'react';
import style from './style.module.scss';

import cn from 'classnames';

type Props = {
  multiline?: boolean;
} & React.ComponentProps<'input'> & React.ComponentProps<'textarea'>;

function Input({multiline, ...props}: Props, ref: any) {
  if (multiline) {
    return (
      <textarea
        {...props}
        ref={ref}
        className={cn(style.input, style.textarea)}
      ></textarea>
    )
  }

  return (
    <input {...props} ref={ref} className={style.input} type="text" />
  );
}

const MyInput = React.forwardRef(Input);

export default MyInput;
