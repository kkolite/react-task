export default function(func: () => void, time: number) {
  let isActive: number | null;
  return function timer(str: string) {
    if (isActive) {
      clearTimeout(isActive);
      isActive = null;
    };
    isActive = setTimeout(func, time, str);
  }
} 