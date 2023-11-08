import { useState, useCallback } from "react";

/**
 * Custom hook to toggle a boolean state.
 *
 * @param {boolean} initOpen Initial state value, `true` by default.
 * @return {[boolean, () => void]} Current state and a toggle function.
 */
const useToggle = (initOpen: boolean = true): [boolean, () => void] => {
  const [open, setIsOpen] = useState(initOpen);

  const toggle = useCallback(() => {
    setIsOpen((prevOpen) => !prevOpen);
  }, []);

  return [open, toggle];
};

export default useToggle;
