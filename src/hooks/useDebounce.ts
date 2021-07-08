import { DependencyList, useEffect } from 'react';

export const useDebounce = (callback: () => void, deps: DependencyList, duration: number) => {
  useEffect(() => {
    const debounceHandler = setTimeout(callback, duration);
    return () => clearTimeout(debounceHandler);
  }, deps);
};
