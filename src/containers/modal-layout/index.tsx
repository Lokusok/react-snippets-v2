import { useEffect, useRef } from 'react';

import style from './style.module.scss';

import { useAppDispatch } from '../../store';
import { setActiveModal } from '../../store/slices/modals';

import useOnClickOutside from '../../hooks/use-on-click-outside';

import CloseBtn from './close-btn';

type Props = {
  title: string;
  children: React.ReactNode;
};

function ModalLayout({ title, children }: Props) {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  const callbacks = {
    onClose: () => dispatch(setActiveModal(null)),
  };

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  useOnClickOutside(modalRef, callbacks.onClose);

  return (
    <div className={style.modal}>
      <div className={style.inner}>
        <div ref={modalRef} className={style.content}>
          <h1 className={style.title}>
            {title}
          </h1>

          <CloseBtn
            onClick={callbacks.onClose}
            className={style.close}
          />

          <div className={style.children}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLayout;
