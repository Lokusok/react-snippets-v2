import style from './style.module.scss';

import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className={style.logo}>
      <h1>Хранитель сниппетов</h1>
    </Link>
  );
}

export default Logo;
