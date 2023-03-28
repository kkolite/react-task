import { useEffect, useRef } from 'react';

export default (key: string, value: string) => {
  const inputValue = useRef(value);

  useEffect(() => {
    return () => {
      localStorage.setItem(key, inputValue.current);
    };
  }, [key]);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);
};
