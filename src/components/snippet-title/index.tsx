import style from './style.module.scss';

type Props = {
  children: string;
};

function SnippetTitle({ children }: Props) {
  return (
    <h3 className={style.title}>
      {children}
    </h3>
  );
}

export default SnippetTitle;
