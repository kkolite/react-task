import { useState } from 'react';

export const useFetching = <T>(callback: (args: T) => Promise<void>) => {
  const [isLoading, setLoading] = useState(false);

  const fetching = async (args: T) => {
    try {
      setLoading(true);
      await callback(args);
    } finally {
      setLoading(false);
    }
  };

  return { fetching, isLoading };
};
