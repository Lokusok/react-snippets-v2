import CloseBtn from './close-btn';
import style from './style.module.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

function ModalLayout({ title, children }: Props) {
  return (
    <div className={style.modal}>
      <div className={style.inner}>
        <div className={style.content}>
          <h1 className={style.title}>
            {title}
          </h1>

          <CloseBtn className={style.close} />

          <div className={style.children}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLayout;
