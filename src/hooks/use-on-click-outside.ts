import React from 'react';

import { useEffect } from 'react';

function useOnClickOutside(ref: React.RefObject<HTMLElement>, ...handlers: any[]) {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      // Клик был внутри
      if (!ref.current || ref.current?.contains(e.target as HTMLElement)) {
        return;
      }

      handlers.forEach((handler) => handler());
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handlers]);
}

export default useOnClickOutside;
