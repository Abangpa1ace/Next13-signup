import React, { PropsWithChildren, useEffect, useRef } from 'react';

interface Props {
  onClickOutside: () => void;
}

export const useClickOutside = (ref: React.RefObject<HTMLSpanElement>, handler: () => void) => {
  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [ref])
}

const ClickOutside = ({ children, onClickOutside }: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLSpanElement>(null);
  useClickOutside(ref, onClickOutside);

  return (
    <span ref={ref}>
      {children}
    </span>
  )
}

export default ClickOutside;