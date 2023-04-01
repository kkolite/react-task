export const useDebounce = (func: (str: string) => Promise<void>) => {
  let isDebounce: NodeJS.Timeout | null = null;
  return function (str: string) {
    if (isDebounce) {
      clearTimeout(isDebounce);
      isDebounce = null;
    }
    isDebounce = setTimeout(func, 500, str);
  };
};
