import style from './style.module.scss';

import SnippetItem from './snippet-item';
import AddSnippet from './add-snippet';

import { TSnippet } from '../../models';

type Props = {
  snippets: TSnippet[];
  onNewSnippet: () => void;
  onSnippetClick: (snippet: TSnippet) => void;
};

function SnippetsList(props: Props) {
  return (
    <div className={style.root}>
      <ul className={style.list}>
        {props.snippets.map((snippet) => (
          <li key={snippet.id} className={style.listItem}>
            <SnippetItem onClick={props.onSnippetClick} snippet={snippet} />
          </li>
        ))}
        <li className={style.listItem}>
          <AddSnippet onClick={props.onNewSnippet} />
        </li>
      </ul>
    </div>
  );
}

export default SnippetsList;
