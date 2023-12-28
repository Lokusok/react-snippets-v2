import { TSnippet } from '../../../models';
import style from './style.module.scss';

type Props = {
  snippet: TSnippet;
  onClick: () => void;
};

function SnippetItem({ snippet, onClick }: Props) {
  return (
    <button onClick={onClick} className={style.root}>
      <span>{snippet.title}</span>
    </button>
  );
}

export default SnippetItem;
