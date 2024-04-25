

import { useState } from 'react';

const useOptimistic = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  
  const setOptimisticValue = (newValue) => {
    setValue(newValue);
   
  };
  
  return [value, setOptimisticValue];
};

export default useOptimistic;
