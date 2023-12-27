import style from './style.module.scss';

import Container from '../container';
import Search from '../search';

function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.row}>
          <h1 className={style.logo}>Логотип тут</h1>
          <Search className={style.search} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
