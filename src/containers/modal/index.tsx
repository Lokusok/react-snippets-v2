import React, { useEffect, useRef } from "react";

import { useAppDispatch } from "../../store";
import { setActiveModal } from "../../store/slices/modals";

import useOnClickOutside from "../../hooks/use-on-click-outside";

import ModalLayout from "../../components/modal-layout";

type Props = {
  title: string;
  children: React.ReactNode;
};

function Modal({ title, children }: Props) {
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
    <ModalLayout title={title} ref={modalRef} onClose={callbacks.onClose}>
      {children}
    </ModalLayout>
  );
}

export default Modal;