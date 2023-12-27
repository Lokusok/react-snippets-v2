import style from './style.module.scss';
import cn from 'classnames';

import { FaPlus } from 'react-icons/fa6';

type Props = {
  variant?: 'short' | 'long';
};

function AddBtn({ variant = 'short' }: Props) {
  const options = {
    classNames: cn(style.button, style[variant]),
  };

  return (
    <button className={options.classNames}>
      <FaPlus />
    </button>
  );
}

export default AddBtn;
