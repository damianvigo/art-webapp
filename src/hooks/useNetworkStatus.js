import { useEffect, useState } from 'react';

const useNetworkStatus = () => {
  const w = window,
    n = navigator;

  const [isOnline, setIsOnline] = useState('');

  useEffect(() => {
    const online = () => {
      if (n.onLine) {
        setIsOnline('online');
      } else {
        setIsOnline('offline');
      }
    };

    w.addEventListener('online', online);
    w.addEventListener('offline', online);

    return () => {
      w.removeEventListener('online', online);
      w.removeEventListener('offline', online);
    };
  }, [isOnline, n, w]);

  return [isOnline, setIsOnline];
};

export default useNetworkStatus;
