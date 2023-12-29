import { TSnippet } from '../../../models';
import style from './style.module.scss';

type Props = {
  snippet: TSnippet;
  onClick: (snippet: TSnippet) => void;
};

function SnippetItem({ snippet, onClick }: Props) {
  const callbacks = {
    onClick: () => {
      onClick(snippet);
    },
  };

  return (
    <button onClick={callbacks.onClick} className={style.root}>
      <span>{snippet.title}</span>
    </button>
  );
}

export default SnippetItem;
