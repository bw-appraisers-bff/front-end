import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

export const useListToGrid = initialValues => {
  const [grid, setGrid] = useLocalStorage("grid-mode", initialValues);
  let savedCard = document.getElementsByClassName("saved");
  useEffect(() => {
    if (grid === true) {
      savedCard.classList.add("grid-mode");
    } else {
        // savedCard.classList.remove("grid-mode");
    }
  }, [grid]);

  return [grid, setGrid];
};