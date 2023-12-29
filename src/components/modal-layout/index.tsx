import style from './style.module.scss';

import CloseBtn from './close-btn';
import { forwardRef } from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const ModalLayout = forwardRef<HTMLDivElement, Props>(({ title, children, onClose }, ref) => {
  return (
    <div className={style.modal}>
      <div className={style.inner}>
        <div ref={ref} className={style.content}>
          <h1 className={style.title}>
            {title}
          </h1>

          <CloseBtn
            onClick={onClose}
            className={style.close}
          />

          <div className={style.children}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ModalLayout;
