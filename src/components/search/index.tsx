import style from './style.module.scss';

import { IoSearchOutline } from 'react-icons/io5';

import cn from 'classnames';

type Props = {
  className?: string;
};

function Search(props: Props) {
  return (
    <div className={cn(style.container, props.className)}>
      <input className={style.input} type="text" placeholder="Поиск по любому вхождению" />
      <button className={style.button}>
        <IoSearchOutline size={25} />
      </button>
    </div>
  );
}

export default Search;
