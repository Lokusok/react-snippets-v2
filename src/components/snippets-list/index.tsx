import style from './style.module.scss';

import SnippetItem from './snippet-item';
import AddSnippet from './add-snippet';

function SnippetsList() {
  return (
    <div className={style.root}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <SnippetItem />
        </li>
        <li className={style.listItem}>
          <SnippetItem />
        </li>
        <li className={style.listItem}>
          <AddSnippet />
        </li>
      </ul>
    </div>
  );
}

export default SnippetsList;
