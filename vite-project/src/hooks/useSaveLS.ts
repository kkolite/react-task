import { useEffect, useRef } from 'react';

export default (key: string, value: string) => {
  const inputValue = useRef(value);

  useEffect(() => {
    return () => {
      console.log(inputValue.current);

      localStorage.setItem(key, inputValue.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);
};
