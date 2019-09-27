import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  //^^^These are what args that will appear in the local storage
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    //allows us to retrieve itm from local storage
    return item ? JSON.parse(item) : initialValue;
    //returns JSON item data back into it's original value if true
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
    //this is what allows us to store in our local storage
  };

  return [storedValue, setValue];
};