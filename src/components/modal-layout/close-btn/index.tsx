import style from './style.module.scss';

import { IoCloseCircle } from 'react-icons/io5';

import cn from 'classnames';

type Props = {
  className?: string;
};

function CloseBtn({ className }: Props) {
  return (
    <button className={cn(style.button, className)}>
      <IoCloseCircle size={35} />
    </button>
  );
}

export default CloseBtn;
