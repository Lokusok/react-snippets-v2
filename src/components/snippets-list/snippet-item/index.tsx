import style from './style.module.scss';

function SnippetItem() {
  return (
    <button className={style.root}>
      <span>Java-код для Backend-части</span>
    </button>
  );
}

export default SnippetItem;
