import React, { useState, useEffect } from 'react';

export const useUpdateCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(3);

    return () => {
      setCount(0);
    };
  }, []);

  return (<button onClick={() => setCount(count+1)}>current count is {count}</button>);
};
