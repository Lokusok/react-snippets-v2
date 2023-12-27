import Container from '../container';
import style from './style.module.scss';

type Props = {
  children: React.ReactNode;
  head?: React.ReactNode;
  footer?: React.ReactNode;
};

function PageLayout({ children, head, footer }: Props) {
  return (
    <div className={style.root}>
      {head}

      <main className={style.main}>
        <Container>
          {children}
        </Container>
      </main>

      {footer}
    </div>
  );
}

export default PageLayout;
