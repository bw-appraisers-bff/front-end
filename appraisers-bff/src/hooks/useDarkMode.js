import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

export const useDarkMode = initialValues => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", initialValues);
  const formContainer = document.getElementsByClassName("form-container")
  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark-mode");
      // formContainer.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};