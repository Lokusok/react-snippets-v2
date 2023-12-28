import style from './style.module.scss';

import Container from '../container';
import Search from '../search';
import Logo from '../logo';

import { TGroupsQuery } from '../../api/groups/types';

type Props = {
  onSearchSubmit: (obj: TGroupsQuery) => void;
};

function Header(props: Props) {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.row}>
          <Logo />
          <Search onSubmit={props.onSearchSubmit} className={style.search} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
