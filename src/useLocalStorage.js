import { useState } from "react";

// need a function to get the Saved vale and the local storage there are key, value
function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  // we want it just like usestate not just take value also take function
  //如果initialValue 有function 那就return回吧
  if (initialValue instanceof Function) return initialValue;
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    //記得!!()={} 版本可避免每次render都下載一次
    return getSavedValue(key, initialValue);
  });
  return [value, setValue];
}
